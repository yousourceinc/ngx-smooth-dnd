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
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(_ngZone) {
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
    ContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.container = smoothDnD(this.containerElementRef.nativeElement, this.getOptions());
    };
    /**
     * @return {?}
     */
    ContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.container.dispose();
    };
    /**
     * @private
     * @return {?}
     */
    ContainerComponent.prototype.getOptions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var options = {};
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
            options.onDragStart = function (info) {
                _this.getNgZone(function () {
                    _this.dragStart.emit(info);
                });
            };
        if (this.dragEnd)
            options.onDragEnd = function (info) {
                _this.getNgZone(function () {
                    _this.dragEnd.emit(info);
                });
            };
        if (this.drop)
            options.onDrop = function (dropResult) {
                _this.getNgZone(function () {
                    _this.drop.emit(dropResult);
                });
            };
        if (this.getChildPayload)
            options.getChildPayload = this.getChildPayload;
        if (this.shouldAnimateDrop)
            options.shouldAnimateDrop = this.shouldAnimateDrop;
        if (this.shouldAcceptDrop)
            options.shouldAcceptDrop = this.shouldAcceptDrop;
        if (this.dragEnter)
            options.onDragEnter = function () { return _this.getNgZone(function () { return _this.dragEnter.emit(); }); };
        if (this.dragLeave)
            options.onDragLeave = function () { return _this.getNgZone(function () { return _this.dragLeave.emit(); }); };
        if (this.dropReady)
            options.onDropReady = function (dropResult) {
                _this.getNgZone(function () {
                    _this.dropReady.emit(dropResult);
                });
            };
        if (this.getGhostParent)
            options.getGhostParent = this.getGhostParent;
        return options;
    };
    /**
     * @private
     * @param {?} clb
     * @return {?}
     */
    ContainerComponent.prototype.getNgZone = /**
     * @private
     * @param {?} clb
     * @return {?}
     */
    function (clb) {
        this._ngZone.run(function () {
            clb();
        });
    };
    ContainerComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: "smooth-dnd-container",
                    template: "<div #container>\r\n    <ng-content></ng-content>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    ContainerComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
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
    return ContainerComponent;
}());
export { ContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B5b3Vzb3VyY2Uvbmd4LXNtb290aC1kbmQvIiwic291cmNlcyI6WyJzcmMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBb0IsU0FBUyxFQUFFLFVBQVUsRUFBaUIsS0FBSyxFQUFxQixNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0TCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBZ0MsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RixTQUFTLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sQ0FBQztBQUNoRSxTQUFTLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7OztBQUU1QixzQ0FJQzs7O0lBSEMsb0NBQWtCOztJQUNsQixtQ0FBYTs7SUFDYiwwQ0FBd0I7O0FBRzFCO0lBK0NFLDRCQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQXJCekIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBQ2pELFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUMvQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN0QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQVkzQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUtGLENBQUM7Ozs7SUFFeEMsNENBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQ3hCLElBQUksQ0FBQyxtQkFBbUIs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Ozs7SUFFdEIscUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJhZ2dhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJhZ2dhYmxlL2RyYWdnYWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBkcm9wSGFuZGxlcnMsIHNtb290aERuRCwgRHJvcFJlc3VsdCwgQ29udGFpbmVyT3B0aW9ucyB9IGZyb20gJ0B5b3Vzb3VyY2Uvc21vb3RoLWRuZCc7XHJcblxyXG5zbW9vdGhEbkQuZHJvcEhhbmRsZXIgPSBkcm9wSGFuZGxlcnMucmVhY3REcm9wSGFuZGxlcigpLmhhbmRsZXI7XHJcbnNtb290aERuRC53cmFwQ2hpbGQgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ1N0YXJ0RW5kSW5mbyB7XHJcbiAgaXNTb3VyY2U6IGJvb2xlYW47XHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIHdpbGxBY2NlcHREcm9wOiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6IFwic21vb3RoLWRuZC1jb250YWluZXJcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2NvbnRhaW5lci5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY29udGFpbmVyOiBhbnk7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihEcmFnZ2FibGVDb21wb25lbnQpXHJcbiAgZHJhZ2dhYmxlczogUXVlcnlMaXN0PERyYWdnYWJsZUNvbXBvbmVudD47XHJcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXJFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoXCJvcmllbnRhdGlvblwiKSBvcmllbnRhdGlvbjtcclxuICBASW5wdXQoXCJiZWhhdmlvdXJcIikgYmVoYXZpb3VyO1xyXG4gIEBJbnB1dChcImdyb3VwTmFtZVwiKSBncm91cE5hbWU7XHJcbiAgQElucHV0KFwibG9ja0F4aXNcIikgbG9ja0F4aXM7XHJcbiAgQElucHV0KFwiZHJhZ0hhbmRsZVNlbGVjdG9yXCIpIGRyYWdIYW5kbGVTZWxlY3RvcjtcclxuICBASW5wdXQoXCJub25EcmFnQXJlYVNlbGVjdG9yXCIpIG5vbkRyYWdBcmVhU2VsZWN0b3I7XHJcbiAgQElucHV0KFwiZHJhZ0JlZ2luRGVsYXlcIikgZHJhZ0JlZ2luRGVsYXk7XHJcbiAgQElucHV0KFwiYW5pbWF0aW9uRHVyYXRpb25cIikgYW5pbWF0aW9uRHVyYXRpb247XHJcbiAgQElucHV0KFwiYXV0b1Njcm9sbEVuYWJsZWRcIikgYXV0b1Njcm9sbEVuYWJsZWQ7XHJcbiAgQElucHV0KFwiZHJhZ0NsYXNzXCIpIGRyYWdDbGFzcztcclxuICBASW5wdXQoXCJkcm9wQ2xhc3NcIikgZHJvcENsYXNzO1xyXG4gIEBJbnB1dChcImRyb3BQbGFjZWhvbGRlclwiKSBkcm9wUGxhY2Vob2xkZXI7XHJcbiAgQElucHV0KFwicmVtb3ZlT25Ecm9wT3V0XCIpIHJlbW92ZU9uRHJvcE91dDtcclxuICBASW5wdXQoXCJkaXNhYmxlU2Nyb2xsT3ZlcmxhcERldGVjdGlvblwiKSBkaXNhYmxlU2Nyb2xsT3ZlcmxhcERldGVjdGlvbjtcclxuXHJcbiAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ1N0YXJ0RW5kSW5mbz4oKTtcclxuICBAT3V0cHV0KCkgZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ1N0YXJ0RW5kSW5mbz4oKTtcclxuICBAT3V0cHV0KCkgZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcFJlc3VsdD4oKTtcclxuICBAT3V0cHV0KCkgZHJvcFJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wUmVzdWx0PigpO1xyXG4gIEBJbnB1dCgpIGdldENoaWxkUGF5bG9hZDogKGluZGV4OiBudW1iZXIpID0+IHt9O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2hvdWxkQW5pbWF0ZURyb3A6IChcclxuICAgIHNvdXJjZUNvbnRhaW5lck9wdGlvbnM6IENvbnRhaW5lck9wdGlvbnMsXHJcbiAgICBwYXlsb2FkOiBhbnlcclxuICApID0+IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBzaG91bGRBY2NlcHREcm9wOiAoXHJcbiAgICBzb3VyY2VDb250YWluZXJPcHRpb25zOiBDb250YWluZXJPcHRpb25zLFxyXG4gICAgcGF5bG9hZDogYW55XHJcbiAgKSA9PiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBkcmFnRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRyYWdMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXRHaG9zdFBhcmVudDogKCkgPT4gSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBzbW9vdGhEbkQoXHJcbiAgICAgIHRoaXMuY29udGFpbmVyRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICB0aGlzLmdldE9wdGlvbnMoKVxyXG4gICAgKTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5kaXNwb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE9wdGlvbnMoKTogQ29udGFpbmVyT3B0aW9ucyB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBDb250YWluZXJPcHRpb25zID0ge307XHJcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbikgb3B0aW9ucy5vcmllbnRhdGlvbiA9IHRoaXMub3JpZW50YXRpb247XHJcbiAgICBpZiAodGhpcy5iZWhhdmlvdXIpIG9wdGlvbnMuYmVoYXZpb3VyID0gdGhpcy5iZWhhdmlvdXI7XHJcbiAgICBpZiAodGhpcy5ncm91cE5hbWUpIG9wdGlvbnMuZ3JvdXBOYW1lID0gdGhpcy5ncm91cE5hbWU7XHJcbiAgICBpZiAodGhpcy5sb2NrQXhpcykgb3B0aW9ucy5sb2NrQXhpcyA9IHRoaXMubG9ja0F4aXM7XHJcbiAgICBpZiAodGhpcy5kcmFnSGFuZGxlU2VsZWN0b3IpXHJcbiAgICAgIG9wdGlvbnMuZHJhZ0hhbmRsZVNlbGVjdG9yID0gdGhpcy5kcmFnSGFuZGxlU2VsZWN0b3I7XHJcbiAgICBpZiAodGhpcy5ub25EcmFnQXJlYVNlbGVjdG9yKVxyXG4gICAgICBvcHRpb25zLm5vbkRyYWdBcmVhU2VsZWN0b3IgPSB0aGlzLm5vbkRyYWdBcmVhU2VsZWN0b3I7XHJcbiAgICBpZiAodGhpcy5kcmFnQmVnaW5EZWxheSkgb3B0aW9ucy5kcmFnQmVnaW5EZWxheSA9IHRoaXMuZHJhZ0JlZ2luRGVsYXk7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25EdXJhdGlvbilcclxuICAgICAgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XHJcbiAgICBpZiAodGhpcy5hdXRvU2Nyb2xsRW5hYmxlZClcclxuICAgICAgb3B0aW9ucy5hdXRvU2Nyb2xsRW5hYmxlZCA9IHRoaXMuYXV0b1Njcm9sbEVuYWJsZWQ7XHJcbiAgICBpZiAodGhpcy5kcmFnQ2xhc3MpIG9wdGlvbnMuZHJhZ0NsYXNzID0gdGhpcy5kcmFnQ2xhc3M7XHJcbiAgICBpZiAodGhpcy5kcm9wQ2xhc3MpIG9wdGlvbnMuZHJvcENsYXNzID0gdGhpcy5kcm9wQ2xhc3M7XHJcbiAgICBpZiAodGhpcy5kcm9wUGxhY2Vob2xkZXIpIG9wdGlvbnMuZHJvcFBsYWNlaG9sZGVyID0gdGhpcy5kcm9wUGxhY2Vob2xkZXI7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlU2Nyb2xsT3ZlcmxhcERldGVjdGlvbikgb3B0aW9ucy5kaXNhYmxlU2Nyb2xsT3ZlcmxhcERldGVjdGlvbiA9IHRoaXMuZGlzYWJsZVNjcm9sbE92ZXJsYXBEZXRlY3Rpb247XHJcbiAgICBpZiAodGhpcy5kcmFnU3RhcnQpXHJcbiAgICAgIG9wdGlvbnMub25EcmFnU3RhcnQgPSAoaW5mbzogRHJhZ1N0YXJ0RW5kSW5mbykgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0LmVtaXQoaW5mbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ0VuZClcclxuICAgICAgb3B0aW9ucy5vbkRyYWdFbmQgPSAoaW5mbzogRHJhZ1N0YXJ0RW5kSW5mbykgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJhZ0VuZC5lbWl0KGluZm8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmRyb3ApXHJcbiAgICAgIG9wdGlvbnMub25Ecm9wID0gKGRyb3BSZXN1bHQ6IERyb3BSZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyb3AuZW1pdChkcm9wUmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5nZXRDaGlsZFBheWxvYWQpIG9wdGlvbnMuZ2V0Q2hpbGRQYXlsb2FkID0gdGhpcy5nZXRDaGlsZFBheWxvYWQ7XHJcbiAgICBpZiAodGhpcy5zaG91bGRBbmltYXRlRHJvcClcclxuICAgICAgb3B0aW9ucy5zaG91bGRBbmltYXRlRHJvcCA9IHRoaXMuc2hvdWxkQW5pbWF0ZURyb3A7XHJcbiAgICBpZiAodGhpcy5zaG91bGRBY2NlcHREcm9wKSBvcHRpb25zLnNob3VsZEFjY2VwdERyb3AgPSB0aGlzLnNob3VsZEFjY2VwdERyb3A7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ0VudGVyKVxyXG4gICAgICBvcHRpb25zLm9uRHJhZ0VudGVyID0gKCkgPT4gdGhpcy5nZXROZ1pvbmUoKCkgPT4gdGhpcy5kcmFnRW50ZXIuZW1pdCgpKTtcclxuICAgIGlmICh0aGlzLmRyYWdMZWF2ZSlcclxuICAgICAgb3B0aW9ucy5vbkRyYWdMZWF2ZSA9ICgpID0+IHRoaXMuZ2V0Tmdab25lKCgpID0+IHRoaXMuZHJhZ0xlYXZlLmVtaXQoKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJvcFJlYWR5KVxyXG4gICAgICBvcHRpb25zLm9uRHJvcFJlYWR5ID0gKGRyb3BSZXN1bHQ6IERyb3BSZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyb3BSZWFkeS5lbWl0KGRyb3BSZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5nZXRHaG9zdFBhcmVudCkgb3B0aW9ucy5nZXRHaG9zdFBhcmVudCA9IHRoaXMuZ2V0R2hvc3RQYXJlbnQ7XHJcblxyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5nWm9uZShjbGIpIHtcclxuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICBjbGIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=