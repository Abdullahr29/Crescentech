import { useState, useEffect } from "react";
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import { isPlatform } from '@ionic/react';
import { Capacitor, FilesystemDirectory } from "@capacitor/core";

export interface Result {

    filepath: string;
    webviewPath?: string;
}

const RESULT_STORAGE = "results";

// export function useLocalStorage() {

//     const { get, set } = useStorage();
//     const [results, setResults] = useState<Result[]>([]);




// }