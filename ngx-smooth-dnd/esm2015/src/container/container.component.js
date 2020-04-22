/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, ViewChild, ElementRef, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { DraggableComponent } from '../draggable/draggable.component';
import { dropHandlers, smoothDnD } from '@yousource/smooth-dnd';
smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler;
smoothDnD.wrapChild = false;
/**
 * @record
 */
export function DragStartEndInfo() { }
if (false) {
    /** @type {?} */
    DragStartEndInfo.prototype.isSource;
    /** @type {?} */
    DragStartEndInfo.prototype.payload;
    /** @type {?} */
    DragStartEndInfo.prototype.willAcceptDrop;
}
export class ContainerComponent {
    /**
     * @param {?} _ngZone
     */
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this.dragStart = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.drop = new EventEmitter();
        this.dropReady = new EventEmitter();
        this.dragEnter = new EventEmitter();
        this.dragLeave = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.container = smoothDnD(this.containerElementRef.nativeElement, this.getOptions());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.container.dispose();
    }
    /**
     * @private
     * @return {?}
     */
    getOptions() {
        /** @type {?} */
        const options = {};
        if (this.orientation)
            options.orientation = this.orientation;
        if (this.behaviour)
            options.behaviour = this.behaviour;
        if (this.groupName)
            options.groupName = this.groupName;
        if (this.lockAxis)
            options.lockAxis = this.lockAxis;
        if (this.dragHandleSelector)
            options.dragHandleSelector = this.dragHandleSelector;
        if (this.nonDragAreaSelector)
            options.nonDragAreaSelector = this.nonDragAreaSelector;
        if (this.dragBeginDelay)
            options.dragBeginDelay = this.dragBeginDelay;
        if (this.animationDuration)
            options.animationDuration = this.animationDuration;
        if (this.autoScrollEnabled)
            options.autoScrollEnabled = this.autoScrollEnabled;
        if (this.dragClass)
            options.dragClass = this.dragClass;
        if (this.dropClass)
            options.dropClass = this.dropClass;
        if (this.dropPlaceholder)
            options.dropPlaceholder = this.dropPlaceholder;
        if (this.disableScrollOverlapDetection)
            options.disableScrollOverlapDetection = this.disableScrollOverlapDetection;
        if (this.dragStart)
            options.onDragStart = (info) => {
                this.getNgZone(() => {
                    this.dragStart.emit(info);
                });
            };
        if (this.dragEnd)
            options.onDragEnd = (info) => {
                this.getNgZone(() => {
                    this.dragEnd.emit(info);
                });
            };
        if (this.drop)
            options.onDrop = (dropResult) => {
                this.getNgZone(() => {
                    this.drop.emit(dropResult);
                });
            };
        if (this.getChildPayload)
            options.getChildPayload = this.getChildPayload;
        if (this.shouldAnimateDrop)
            options.shouldAnimateDrop = this.shouldAnimateDrop;
        if (this.shouldAcceptDrop)
            options.shouldAcceptDrop = this.shouldAcceptDrop;
        if (this.dragEnter)
            options.onDragEnter = () => this.getNgZone(() => this.dragEnter.emit());
        if (this.dragLeave)
            options.onDragLeave = () => this.getNgZone(() => this.dragLeave.emit());
        if (this.dropReady)
            options.onDropReady = (dropResult) => {
                this.getNgZone(() => {
                    this.dropReady.emit(dropResult);
                });
            };
        if (this.getGhostParent)
            options.getGhostParent = this.getGhostParent;
        return options;
    }
    /**
     * @private
     * @param {?} clb
     * @return {?}
     */
    getNgZone(clb) {
        this._ngZone.run(() => {
            clb();
        });
    }
}
ContainerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: "smooth-dnd-container",
                template: "<div #container>\r\n    <ng-content></ng-content>\r\n</div>"
            }] }
];
/** @nocollapse */
ContainerComponent.ctorParameters = () => [
    { type: NgZone }
];
ContainerComponent.propDecorators = {
    draggables: [{ type: ContentChildren, args: [DraggableComponent,] }],
    containerElementRef: [{ type: ViewChild, args: ["container",] }],
    orientation: [{ type: Input, args: ["orientation",] }],
    behaviour: [{ type: Input, args: ["behaviour",] }],
    groupName: [{ type: Input, args: ["groupName",] }],
    lockAxis: [{ type: Input, args: ["lockAxis",] }],
    dragHandleSelector: [{ type: Input, args: ["dragHandleSelector",] }],
    nonDragAreaSelector: [{ type: Input, args: ["nonDragAreaSelector",] }],
    dragBeginDelay: [{ type: Input, args: ["dragBeginDelay",] }],
    animationDuration: [{ type: Input, args: ["animationDuration",] }],
    autoScrollEnabled: [{ type: Input, args: ["autoScrollEnabled",] }],
    dragClass: [{ type: Input, args: ["dragClass",] }],
    dropClass: [{ type: Input, args: ["dropClass",] }],
    dropPlaceholder: [{ type: Input, args: ["dropPlaceholder",] }],
    removeOnDropOut: [{ type: Input, args: ["removeOnDropOut",] }],
    disableScrollOverlapDetection: [{ type: Input, args: ["disableScrollOverlapDetection",] }],
    dragStart: [{ type: Output }],
    dragEnd: [{ type: Output }],
    drop: [{ type: Output }],
    dropReady: [{ type: Output }],
    getChildPayload: [{ type: Input }],
    shouldAnimateDrop: [{ type: Input }],
    shouldAcceptDrop: [{ type: Input }],
    dragEnter: [{ type: Output }],
    dragLeave: [{ type: Output }],
    getGhostParent: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ContainerComponent.prototype.container;
    /** @type {?} */
    ContainerComponent.prototype.draggables;
    /** @type {?} */
    ContainerComponent.prototype.containerElementRef;
    /** @type {?} */
    ContainerComponent.prototype.orientation;
    /** @type {?} */
    ContainerComponent.prototype.behaviour;
    /** @type {?} */
    ContainerComponent.prototype.groupName;
    /** @type {?} */
    ContainerComponent.prototype.lockAxis;
    /** @type {?} */
    ContainerComponent.prototype.dragHandleSelector;
    /** @type {?} */
    ContainerComponent.prototype.nonDragAreaSelector;
    /** @type {?} */
    ContainerComponent.prototype.dragBeginDelay;
    /** @type {?} */
    ContainerComponent.prototype.animationDuration;
    /** @type {?} */
    ContainerComponent.prototype.autoScrollEnabled;
    /** @type {?} */
    ContainerComponent.prototype.dragClass;
    /** @type {?} */
    ContainerComponent.prototype.dropClass;
    /** @type {?} */
    ContainerComponent.prototype.dropPlaceholder;
    /** @type {?} */
    ContainerComponent.prototype.removeOnDropOut;
    /** @type {?} */
    ContainerComponent.prototype.disableScrollOverlapDetection;
    /** @type {?} */
    ContainerComponent.prototype.dragStart;
    /** @type {?} */
    ContainerComponent.prototype.dragEnd;
    /** @type {?} */
    ContainerComponent.prototype.drop;
    /** @type {?} */
    ContainerComponent.prototype.dropReady;
    /** @type {?} */
    ContainerComponent.prototype.getChildPayload;
    /** @type {?} */
    ContainerComponent.prototype.shouldAnimateDrop;
    /** @type {?} */
    ContainerComponent.prototype.shouldAcceptDrop;
    /** @type {?} */
    ContainerComponent.prototype.dragEnter;
    /** @type {?} */
    ContainerComponent.prototype.dragLeave;
    /** @type {?} */
    ContainerComponent.prototype.getGhostParent;
    /**
     * @type {?}
     * @private
     */
    ContainerComponent.prototype._ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B5b3Vzb3VyY2Uvbmd4LXNtb290aC1kbmQvIiwic291cmNlcyI6WyJzcmMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBb0IsU0FBUyxFQUFFLFVBQVUsRUFBaUIsS0FBSyxFQUFxQixNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0TCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBZ0MsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RixTQUFTLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sQ0FBQztBQUNoRSxTQUFTLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7OztBQUU1QixzQ0FJQzs7O0lBSEMsb0NBQWtCOztJQUNsQixtQ0FBYTs7SUFDYiwwQ0FBd0I7O0FBUTFCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUEwQzdCLFlBQW9CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBckJ6QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDakQsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBQy9DLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3RDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBWTNDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBS0YsQ0FBQzs7OztJQUV4QyxlQUFlO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQ3hCLElBQUks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LHFDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdnYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2RyYWdnYWJsZS9kcmFnZ2FibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgZHJvcEhhbmRsZXJzLCBzbW9vdGhEbkQsIERyb3BSZXN1bHQsIENvbnRhaW5lck9wdGlvbnMgfSBmcm9tICdAeW91c291cmNlL3Ntb290aC1kbmQnO1xyXG5cclxuc21vb3RoRG5ELmRyb3BIYW5kbGVyID0gZHJvcEhhbmRsZXJzLnJlYWN0RHJvcEhhbmRsZXIoKS5oYW5kbGVyO1xyXG5zbW9vdGhEbkQud3JhcENoaWxkID0gZmFsc2U7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyYWdTdGFydEVuZEluZm8ge1xyXG4gIGlzU291cmNlOiBib29sZWFuO1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICB3aWxsQWNjZXB0RHJvcDogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiBcInNtb290aC1kbmQtY29udGFpbmVyXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jb250YWluZXIuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGNvbnRhaW5lcjogYW55O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oRHJhZ2dhYmxlQ29tcG9uZW50KVxyXG4gIGRyYWdnYWJsZXM6IFF1ZXJ5TGlzdDxEcmFnZ2FibGVDb21wb25lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyRWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KFwib3JpZW50YXRpb25cIikgb3JpZW50YXRpb247XHJcbiAgQElucHV0KFwiYmVoYXZpb3VyXCIpIGJlaGF2aW91cjtcclxuICBASW5wdXQoXCJncm91cE5hbWVcIikgZ3JvdXBOYW1lO1xyXG4gIEBJbnB1dChcImxvY2tBeGlzXCIpIGxvY2tBeGlzO1xyXG4gIEBJbnB1dChcImRyYWdIYW5kbGVTZWxlY3RvclwiKSBkcmFnSGFuZGxlU2VsZWN0b3I7XHJcbiAgQElucHV0KFwibm9uRHJhZ0FyZWFTZWxlY3RvclwiKSBub25EcmFnQXJlYVNlbGVjdG9yO1xyXG4gIEBJbnB1dChcImRyYWdCZWdpbkRlbGF5XCIpIGRyYWdCZWdpbkRlbGF5O1xyXG4gIEBJbnB1dChcImFuaW1hdGlvbkR1cmF0aW9uXCIpIGFuaW1hdGlvbkR1cmF0aW9uO1xyXG4gIEBJbnB1dChcImF1dG9TY3JvbGxFbmFibGVkXCIpIGF1dG9TY3JvbGxFbmFibGVkO1xyXG4gIEBJbnB1dChcImRyYWdDbGFzc1wiKSBkcmFnQ2xhc3M7XHJcbiAgQElucHV0KFwiZHJvcENsYXNzXCIpIGRyb3BDbGFzcztcclxuICBASW5wdXQoXCJkcm9wUGxhY2Vob2xkZXJcIikgZHJvcFBsYWNlaG9sZGVyO1xyXG4gIEBJbnB1dChcInJlbW92ZU9uRHJvcE91dFwiKSByZW1vdmVPbkRyb3BPdXQ7XHJcbiAgQElucHV0KFwiZGlzYWJsZVNjcm9sbE92ZXJsYXBEZXRlY3Rpb25cIikgZGlzYWJsZVNjcm9sbE92ZXJsYXBEZXRlY3Rpb247XHJcblxyXG4gIEBPdXRwdXQoKSBkcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdTdGFydEVuZEluZm8+KCk7XHJcbiAgQE91dHB1dCgpIGRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdTdGFydEVuZEluZm8+KCk7XHJcbiAgQE91dHB1dCgpIGRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BSZXN1bHQ+KCk7XHJcbiAgQE91dHB1dCgpIGRyb3BSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcFJlc3VsdD4oKTtcclxuICBASW5wdXQoKSBnZXRDaGlsZFBheWxvYWQ6IChpbmRleDogbnVtYmVyKSA9PiB7fTtcclxuICBASW5wdXQoKVxyXG4gIHNob3VsZEFuaW1hdGVEcm9wOiAoXHJcbiAgICBzb3VyY2VDb250YWluZXJPcHRpb25zOiBDb250YWluZXJPcHRpb25zLFxyXG4gICAgcGF5bG9hZDogYW55XHJcbiAgKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2hvdWxkQWNjZXB0RHJvcDogKFxyXG4gICAgc291cmNlQ29udGFpbmVyT3B0aW9uczogQ29udGFpbmVyT3B0aW9ucyxcclxuICAgIHBheWxvYWQ6IGFueVxyXG4gICkgPT4gYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgZHJhZ0VudGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkcmFnTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0R2hvc3RQYXJlbnQ6ICgpID0+IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gc21vb3RoRG5EKFxyXG4gICAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgdGhpcy5nZXRPcHRpb25zKClcclxuICAgICk7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250YWluZXIuZGlzcG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPcHRpb25zKCk6IENvbnRhaW5lck9wdGlvbnMge1xyXG4gICAgY29uc3Qgb3B0aW9uczogQ29udGFpbmVyT3B0aW9ucyA9IHt9O1xyXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24pIG9wdGlvbnMub3JpZW50YXRpb24gPSB0aGlzLm9yaWVudGF0aW9uO1xyXG4gICAgaWYgKHRoaXMuYmVoYXZpb3VyKSBvcHRpb25zLmJlaGF2aW91ciA9IHRoaXMuYmVoYXZpb3VyO1xyXG4gICAgaWYgKHRoaXMuZ3JvdXBOYW1lKSBvcHRpb25zLmdyb3VwTmFtZSA9IHRoaXMuZ3JvdXBOYW1lO1xyXG4gICAgaWYgKHRoaXMubG9ja0F4aXMpIG9wdGlvbnMubG9ja0F4aXMgPSB0aGlzLmxvY2tBeGlzO1xyXG4gICAgaWYgKHRoaXMuZHJhZ0hhbmRsZVNlbGVjdG9yKVxyXG4gICAgICBvcHRpb25zLmRyYWdIYW5kbGVTZWxlY3RvciA9IHRoaXMuZHJhZ0hhbmRsZVNlbGVjdG9yO1xyXG4gICAgaWYgKHRoaXMubm9uRHJhZ0FyZWFTZWxlY3RvcilcclxuICAgICAgb3B0aW9ucy5ub25EcmFnQXJlYVNlbGVjdG9yID0gdGhpcy5ub25EcmFnQXJlYVNlbGVjdG9yO1xyXG4gICAgaWYgKHRoaXMuZHJhZ0JlZ2luRGVsYXkpIG9wdGlvbnMuZHJhZ0JlZ2luRGVsYXkgPSB0aGlzLmRyYWdCZWdpbkRlbGF5O1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyYXRpb24pXHJcbiAgICAgIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24gPSB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uO1xyXG4gICAgaWYgKHRoaXMuYXV0b1Njcm9sbEVuYWJsZWQpXHJcbiAgICAgIG9wdGlvbnMuYXV0b1Njcm9sbEVuYWJsZWQgPSB0aGlzLmF1dG9TY3JvbGxFbmFibGVkO1xyXG4gICAgaWYgKHRoaXMuZHJhZ0NsYXNzKSBvcHRpb25zLmRyYWdDbGFzcyA9IHRoaXMuZHJhZ0NsYXNzO1xyXG4gICAgaWYgKHRoaXMuZHJvcENsYXNzKSBvcHRpb25zLmRyb3BDbGFzcyA9IHRoaXMuZHJvcENsYXNzO1xyXG4gICAgaWYgKHRoaXMuZHJvcFBsYWNlaG9sZGVyKSBvcHRpb25zLmRyb3BQbGFjZWhvbGRlciA9IHRoaXMuZHJvcFBsYWNlaG9sZGVyO1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZVNjcm9sbE92ZXJsYXBEZXRlY3Rpb24pIG9wdGlvbnMuZGlzYWJsZVNjcm9sbE92ZXJsYXBEZXRlY3Rpb24gPSB0aGlzLmRpc2FibGVTY3JvbGxPdmVybGFwRGV0ZWN0aW9uO1xyXG4gICAgaWYgKHRoaXMuZHJhZ1N0YXJ0KVxyXG4gICAgICBvcHRpb25zLm9uRHJhZ1N0YXJ0ID0gKGluZm86IERyYWdTdGFydEVuZEluZm8pID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyYWdTdGFydC5lbWl0KGluZm8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmRyYWdFbmQpXHJcbiAgICAgIG9wdGlvbnMub25EcmFnRW5kID0gKGluZm86IERyYWdTdGFydEVuZEluZm8pID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyYWdFbmQuZW1pdChpbmZvKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5kcm9wKVxyXG4gICAgICBvcHRpb25zLm9uRHJvcCA9IChkcm9wUmVzdWx0OiBEcm9wUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXROZ1pvbmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kcm9wLmVtaXQoZHJvcFJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuZ2V0Q2hpbGRQYXlsb2FkKSBvcHRpb25zLmdldENoaWxkUGF5bG9hZCA9IHRoaXMuZ2V0Q2hpbGRQYXlsb2FkO1xyXG4gICAgaWYgKHRoaXMuc2hvdWxkQW5pbWF0ZURyb3ApXHJcbiAgICAgIG9wdGlvbnMuc2hvdWxkQW5pbWF0ZURyb3AgPSB0aGlzLnNob3VsZEFuaW1hdGVEcm9wO1xyXG4gICAgaWYgKHRoaXMuc2hvdWxkQWNjZXB0RHJvcCkgb3B0aW9ucy5zaG91bGRBY2NlcHREcm9wID0gdGhpcy5zaG91bGRBY2NlcHREcm9wO1xyXG5cclxuICAgIGlmICh0aGlzLmRyYWdFbnRlcilcclxuICAgICAgb3B0aW9ucy5vbkRyYWdFbnRlciA9ICgpID0+IHRoaXMuZ2V0Tmdab25lKCgpID0+IHRoaXMuZHJhZ0VudGVyLmVtaXQoKSk7XHJcbiAgICBpZiAodGhpcy5kcmFnTGVhdmUpXHJcbiAgICAgIG9wdGlvbnMub25EcmFnTGVhdmUgPSAoKSA9PiB0aGlzLmdldE5nWm9uZSgoKSA9PiB0aGlzLmRyYWdMZWF2ZS5lbWl0KCkpO1xyXG5cclxuICAgIGlmICh0aGlzLmRyb3BSZWFkeSlcclxuICAgICAgb3B0aW9ucy5vbkRyb3BSZWFkeSA9IChkcm9wUmVzdWx0OiBEcm9wUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXROZ1pvbmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kcm9wUmVhZHkuZW1pdChkcm9wUmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuZ2V0R2hvc3RQYXJlbnQpIG9wdGlvbnMuZ2V0R2hvc3RQYXJlbnQgPSB0aGlzLmdldEdob3N0UGFyZW50O1xyXG5cclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXROZ1pvbmUoY2xiKSB7XHJcbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgY2xiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19