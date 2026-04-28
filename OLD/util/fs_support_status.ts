/** What is supported by the current environment */
export interface FsSupportStatus {
    /** Returned by window.isSecureContext */
    isSecureContext: boolean;

    /**
     * The implementation for FsFileSystem used
     *
     * See README.md for more information
     */
    implementation: "File" | "FileSystemAccess" | "FileEntry";
};

/** Get which implementation will be used for the current environment */
export const fsGetSupportStatus = (): FsSupportStatus => {
    if (isFileSystemAccessSupported()) {
        return {
            isSecureContext: globalThis.isSecureContext,
            implementation: "FileSystemAccess",
        };
    }
    if (isFileEntrySupported()) {
        return {
            isSecureContext: globalThis.isSecureContext,
            implementation: "FileEntry",
        };
    }

    return {
        isSecureContext: !!globalThis && globalThis.isSecureContext,
        implementation: "File",
    };
}

const isFileSystemAccessSupported = () => {
    if (!globalThis) {
        return false;
    }
    if (!globalThis.isSecureContext) {
        // In Chrome, you can still access the APIs but they just crash the page entirely
        return false;
    }
    if (!globalThis.FileSystemDirectoryHandle) {
        return false;
    }

    if (!globalThis.FileSystemFileHandle) {
        return false;
    }

    // since TSlib doesn't have these, let's check here

    // @ts-expect-error FileSystemDirectoryHandle should have a values() method
    if (!globalThis.FileSystemDirectoryHandle.prototype.values) {
        return false;
    }

    // @ts-expect-error window should have showDirectoryPicker
    if (!globalThis.showDirectoryPicker) {
        return false;
    }

    return true;
}

const isFileEntrySupported = (): boolean => {
    if (!globalThis) {
        return false;
    }

    // Chrome/Edge has this but it's named DirectoryEntry
    // AND, they don't work (when I tried to use them it just crashes the entire broswer, lol)

    if (navigator && navigator.userAgent && navigator.userAgent.includes("Chrome")) {
        return false;
    }

    if (!globalThis.FileSystemDirectoryEntry) {
        return false;
    }

    if (!globalThis.FileSystemFileEntry) {
        return false;
    }

    return true;
}
