import React, { useState } from 'react';
import { usePhotoGallery, Photo } from '../hooks/usePhotoGallery';
import { camera, trash, close } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonActionSheet, IonLoading } from '@ionic/react';
import "../components/NFCReader.css";


/** Type for the possible steps of the app */
type TStep =
	| "initializing"
	| "noNfc"
	| "nfcNotEnabled"
	| "waitingForNfcEnabled"
	| "waitingForTag"
	| "cancelled"
	| "tagRead"
	| "tagWait"
	| "readingStarted";


const NFCReader: React.FC = () => {
	const [step, setStep] = React.useState<TStep>("initializing");
	const [tagContent, setTagContent] = React.useState("");

	// Initialize NFC when the app is started
	React.useEffect(initializeNfc, []);

	const [showLoading, setShowLoading] = useState(true);

	//const [val, setVal] = 0;

  	


	function initializeNfc() {
		// If nfc is undefined, NFC is not available on this device, or
		// the app is running in a web browser
		if (typeof nfc !== "undefined") {
			// Register an event listener
			nfc.addNdefListener(
				onNdefEvent, // The callback function for the event listener
				() => setStep("waitingForTag"), // Success → We're waiting for an event
				() => setStep("nfcNotEnabled") // Error → NFC must not be enabled
			);
		} else {
			setStep("noNfc");
		}
	}

	function onSuccess() {
		setShowLoading(true)
	}

	function onFailure() {
		setShowLoading(true)
	}

	function startNfc(){
		setTimeout(() => {
			startmainNfc();
		  }, 20000);
		startNfcA();
	}

	function startNfcA() {
		nfc.addNdefListener(
			onNdefEvent
		);

		//setShowLoading(true)
		// nfc.addTagDiscoveredListener(async function(nfcEvent:any) {
		// 	await nfc.connect('android.nfc.tech.IsoDep', 500).then(
		// 		() => console.log('connected to', nfc.bytesToHexString(nfcEvent.tag.id)),
		// 		(error:any) => console.log('connection failed', error)
		// 	);
		// })
		// nfc.addTagDiscoveredListener(async function(nfcEvent:any)
		

		// );
	}

	function startmainNfc() {
		nfc.addNdefListener(
			mainNdefEvent
		);

		

		//setShowLoading(true)
		// nfc.addTagDiscoveredListener(async function(nfcEvent:any) {
		// 	await nfc.connect('android.nfc.tech.IsoDep', 500).then(
		// 		() => console.log('connected to', nfc.bytesToHexString(nfcEvent.tag.id)),
		// 		(error:any) => console.log('connection failed', error)
		// 	);
		// })
		// nfc.addTagDiscoveredListener(async function(nfcEvent:any)
		

		// );
		setStep("tagWait");
	}

	function onGoToSettingsClick() {
		if (typeof nfc !== "undefined") {
			// Ask the device to open the NFC settings for the user
			nfc.showSettings(
				() => setStep("waitingForNfcEnabled"),
				() => alert("An error occurred while trying to open the NFC Settings.")
			);
		}
	}

	function onNdefEvent(e: PhoneGapNfc.TagEvent) {
		// Unregister the event listener
		//nfc.removeNdefListener(onNdefEvent);
		

		// setTagContent(
		// 	// Retrieve the payload of the tag and decode it
		// 	// https://www.oreilly.com/library/view/beginning-nfc/9781449324094/ch04.html
		// 	ndef.textHelper.decodePayload(
		// 		(e as PhoneGapNfc.NdefTagEvent).tag.ndefMessage[0].payload
		// 	)
		// );

		// setStep("tagRead");
	}
	function mainNdefEvent(e: PhoneGapNfc.TagEvent) {
		// Unregister the event listener
		//nfc.removeNdefListener(onNdefEvent);
		startNfc();

		setTagContent(
			// Retrieve the payload of the tag and decode it
			// https://www.oreilly.com/library/view/beginning-nfc/9781449324094/ch04.html
			ndef.textHelper.decodePayload(
				(e as PhoneGapNfc.NdefTagEvent).tag.ndefMessage[0].payload
			)
		);

		setStep("tagRead");
	}

	function onStopClick() {
		if (typeof nfc !== "undefined") {
			// Unregister the event listener
			nfc.removeNdefListener(onNdefEvent);
		}
		setTagContent("");
		setStep("waitingForTag");
	}

	return (
		<div className="nfc">
			{step === "initializing" ? (
				<div>Initializing...</div>
			) : step === "noNfc" ? (
				<div>
					The device you are using doesn't appear to have NFC; or, the
					PhoneGap-NFC plugin hasn't been set up correctly.
				</div>
			) : step === "nfcNotEnabled" ? (
				<div>
					<div>
						NFC is not enabled on your device. Click the button bellow to open
						your device's settings, then activate NFC.
					</div>
					<button onClick={onGoToSettingsClick}>Go to NFC Settings</button>
				</div>
			) : step === "waitingForNfcEnabled" ? (
				<div>
					<div>Please click the button below once you have enabled NFC.</div>
					<button onClick={initializeNfc}>Initialize NFC Reader</button>
				</div>
			) : step === "waitingForTag" ? (
				<div>
					<div>Scan a NFC Tag to see its content</div>
					<button onClick={startNfc}>Start NFC Reader</button>
				</div>
			) : step === "tagWait" ? (
				<div>
					<div>Scanning the tag:</div>
					<IonLoading
        				isOpen={showLoading}
        				message={'Please wait...'}
						onDidDismiss={() => setShowLoading(false)}
        				duration={5000}
      				/>
					<div>{tagContent}</div>
					<button onClick={onStopClick}>Stop NFC Reader</button>
				</div>
			) : step === "tagRead" ? (
				<div>
					<div>Tag scanned! Here it's content:</div>
					<div>{tagContent}</div>
					<button onClick={onStopClick}>Stop NFC Reader</button>
				</div>
			) : (
				<div>
					<div>Bye!</div>
				</div>
			)}
		</div>
	);
};

export default NFCReader;