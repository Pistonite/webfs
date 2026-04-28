export {
    fsSave,
    type FsFileOpenOptions,
    type FsFileOpenType,
    type FsFileOpenTypeAccept,
    fsOpenFile,
    fsOpenFileMultiple,
} from "#api";
export type { FsFileStandalone } from "#interface";
export { FsErr, type FsError, type FsResult, type FsVoid, log as fsLogger } from "#util";
