export { fsOpenRead, fsOpenReadWrite, fsOpenReadFrom, fsOpenReadWriteFrom } from "./FsOpen.ts";
export { fsOpenFile, fsOpenFileMultiple } from "./FsOpenFile.ts";
export { fsGetSupportStatus } from "./fs_support_status.ts";
export {
    fsRoot,
    fsIsRoot,
    fsGetBase,
    fsGetName,
    fsNormalize,
    fsJoin,
    fsComponents,
} from "./fs_path.ts";
export { fsSave } from "./fs_save.ts";
export { FsErr, fsErr, fsFail } from "./fs_error.ts";

export type { FsOpenRetryHandler } from "./FsOpen.ts";
export type * from "./FsOpenFile.ts";
export type { FsSupportStatus } from "./fs_support_status.ts";
export type { FsFileSystem, FsFileSystemUninit, FsCapabilities } from "./FsFileSystem.ts";
export type { FsFile } from "./FsFile.ts";
export type { FsFileStandalone } from "./FsFileStandalone.ts";

export type { FsError, FsResult, FsVoid } from "./fs_error.ts";
