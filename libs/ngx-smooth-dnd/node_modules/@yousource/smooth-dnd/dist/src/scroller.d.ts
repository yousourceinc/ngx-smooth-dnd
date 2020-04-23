import { DraggableInfo, IContainer } from "./interfaces";
declare const _default: (containers: IContainer[], maxScrollSpeed?: number, disableOverlapDetection?: boolean) => ({ draggableInfo, reset }: {
    draggableInfo?: DraggableInfo | undefined;
    reset?: boolean | undefined;
}) => void;
export default _default;
