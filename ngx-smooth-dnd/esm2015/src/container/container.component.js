import * as tslib_1 from "tslib";
import { Component, ContentChildren, QueryList, AfterContentInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { DraggableComponent } from '../draggable/draggable.component';
import { dropHandlers, smoothDnD } from '@yousource/smooth-dnd';
smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler;
smoothDnD.wrapChild = false;
let ContainerComponent = class ContainerComponent {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this.dragStart = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.drop = new EventEmitter();
        this.dropReady = new EventEmitter();
        this.dragEnter = new EventEmitter();
        this.dragLeave = new EventEmitter();
    }
    ngAfterViewInit() {
        this.container = smoothDnD(this.containerElementRef.nativeElement, this.getOptions());
        if (this.useTransformForGhost)
            this.container.useTransformForGhost = this.useTransformForGhost;
    }
    ngOnDestroy() {
        this.container.dispose();
    }
    getOptions() {
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
    getNgZone(clb) {
        this._ngZone.run(() => {
            clb();
        });
    }
};
ContainerComponent.ctorParameters = () => [
    { type: NgZone }
];
tslib_1.__decorate([
    ContentChildren(DraggableComponent),
    tslib_1.__metadata("design:type", QueryList)
], ContainerComponent.prototype, "draggables", void 0);
tslib_1.__decorate([
    ViewChild("container"),
    tslib_1.__metadata("design:type", ElementRef)
], ContainerComponent.prototype, "containerElementRef", void 0);
tslib_1.__decorate([
    Input("orientation"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "orientation", void 0);
tslib_1.__decorate([
    Input("behaviour"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "behaviour", void 0);
tslib_1.__decorate([
    Input("groupName"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "groupName", void 0);
tslib_1.__decorate([
    Input("lockAxis"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "lockAxis", void 0);
tslib_1.__decorate([
    Input("dragHandleSelector"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dragHandleSelector", void 0);
tslib_1.__decorate([
    Input("nonDragAreaSelector"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "nonDragAreaSelector", void 0);
tslib_1.__decorate([
    Input("dragBeginDelay"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dragBeginDelay", void 0);
tslib_1.__decorate([
    Input("animationDuration"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "animationDuration", void 0);
tslib_1.__decorate([
    Input("autoScrollEnabled"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "autoScrollEnabled", void 0);
tslib_1.__decorate([
    Input("dragClass"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dragClass", void 0);
tslib_1.__decorate([
    Input("dropClass"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dropClass", void 0);
tslib_1.__decorate([
    Input("dropPlaceholder"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dropPlaceholder", void 0);
tslib_1.__decorate([
    Input("removeOnDropOut"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "removeOnDropOut", void 0);
tslib_1.__decorate([
    Input("disableScrollOverlapDetection"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "disableScrollOverlapDetection", void 0);
tslib_1.__decorate([
    Input("useTransformForGhost"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "useTransformForGhost", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dragStart", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dragEnd", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "drop", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dropReady", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], ContainerComponent.prototype, "getChildPayload", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], ContainerComponent.prototype, "shouldAnimateDrop", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], ContainerComponent.prototype, "shouldAcceptDrop", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dragEnter", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dragLeave", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], ContainerComponent.prototype, "getGhostParent", void 0);
ContainerComponent = tslib_1.__decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: "smooth-dnd-container",
        template: "<div #container>\r\n    <ng-content></ng-content>\r\n</div>"
    }),
    tslib_1.__metadata("design:paramtypes", [NgZone])
], ContainerComponent);
export { ContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B5b3Vzb3VyY2Uvbmd4LXNtb290aC1kbmQvIiwic291cmNlcyI6WyJzcmMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0TCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBZ0MsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RixTQUFTLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sQ0FBQztBQUNoRSxTQUFTLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQWE1QixJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQTJDN0IsWUFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFyQnpCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUNqRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDL0MsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDdEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFZM0MsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFLRixDQUFDO0lBRXhDLGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FDeEIsSUFBSSxDQUFDLG1CQUFtQixD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QUVoRDtJQURDLEtBQUssRUFBRTs7NkRBSUs7QUFFYjtJQURDLEtBQUssRUFBRTs7NERBSUs7QUFDSDtJQUFULE1BQU0sRUFBRTs7cURBQWdDO0FBQy9CO0lBQVQsTUFBTSxFQUFFOztxREFBZ0M7QUFHekM7SUFEQyxLQUFLLEVBQUU7OzBEQUMwQjtBQXpDdkIsa0JBQWtCO0lBTDlCLFNBQVMsQ0FBQztRQUNULDhDQUE4QztRQUM5QyxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLHVFQUF5QztLQUMxQyxDQUFDOzZDQTRDNkIsTUFBTTtHQTNDeEIsa0JBQWtCLENBNEg5QjtTQTVIWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEcmFnZ2FibGVDb21wb25lbnQgfSBmcm9tICcuLi9kcmFnZ2FibGUvZHJhZ2dhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGRyb3BIYW5kbGVycywgc21vb3RoRG5ELCBEcm9wUmVzdWx0LCBDb250YWluZXJPcHRpb25zIH0gZnJvbSAnQHlvdXNvdXJjZS9zbW9vdGgtZG5kJztcclxuXHJcbnNtb290aERuRC5kcm9wSGFuZGxlciA9IGRyb3BIYW5kbGVycy5yZWFjdERyb3BIYW5kbGVyKCkuaGFuZGxlcjtcclxuc21vb3RoRG5ELndyYXBDaGlsZCA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcmFnU3RhcnRFbmRJbmZvIHtcclxuICBpc1NvdXJjZTogYm9vbGVhbjtcclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgd2lsbEFjY2VwdERyb3A6IGJvb2xlYW47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogXCJzbW9vdGgtZG5kLWNvbnRhaW5lclwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY29udGFpbmVyLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBjb250YWluZXI6IGFueTtcclxuICBAQ29udGVudENoaWxkcmVuKERyYWdnYWJsZUNvbXBvbmVudClcclxuICBkcmFnZ2FibGVzOiBRdWVyeUxpc3Q8RHJhZ2dhYmxlQ29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lckVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dChcIm9yaWVudGF0aW9uXCIpIG9yaWVudGF0aW9uO1xyXG4gIEBJbnB1dChcImJlaGF2aW91clwiKSBiZWhhdmlvdXI7XHJcbiAgQElucHV0KFwiZ3JvdXBOYW1lXCIpIGdyb3VwTmFtZTtcclxuICBASW5wdXQoXCJsb2NrQXhpc1wiKSBsb2NrQXhpcztcclxuICBASW5wdXQoXCJkcmFnSGFuZGxlU2VsZWN0b3JcIikgZHJhZ0hhbmRsZVNlbGVjdG9yO1xyXG4gIEBJbnB1dChcIm5vbkRyYWdBcmVhU2VsZWN0b3JcIikgbm9uRHJhZ0FyZWFTZWxlY3RvcjtcclxuICBASW5wdXQoXCJkcmFnQmVnaW5EZWxheVwiKSBkcmFnQmVnaW5EZWxheTtcclxuICBASW5wdXQoXCJhbmltYXRpb25EdXJhdGlvblwiKSBhbmltYXRpb25EdXJhdGlvbjtcclxuICBASW5wdXQoXCJhdXRvU2Nyb2xsRW5hYmxlZFwiKSBhdXRvU2Nyb2xsRW5hYmxlZDtcclxuICBASW5wdXQoXCJkcmFnQ2xhc3NcIikgZHJhZ0NsYXNzO1xyXG4gIEBJbnB1dChcImRyb3BDbGFzc1wiKSBkcm9wQ2xhc3M7XHJcbiAgQElucHV0KFwiZHJvcFBsYWNlaG9sZGVyXCIpIGRyb3BQbGFjZWhvbGRlcjtcclxuICBASW5wdXQoXCJyZW1vdmVPbkRyb3BPdXRcIikgcmVtb3ZlT25Ecm9wT3V0O1xyXG4gIEBJbnB1dChcImRpc2FibGVTY3JvbGxPdmVybGFwRGV0ZWN0aW9uXCIpIGRpc2FibGVTY3JvbGxPdmVybGFwRGV0ZWN0aW9uO1xyXG4gIEBJbnB1dChcInVzZVRyYW5zZm9ybUZvckdob3N0XCIpIHVzZVRyYW5zZm9ybUZvckdob3N0O1xyXG5cclxuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnU3RhcnRFbmRJbmZvPigpO1xyXG4gIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnU3RhcnRFbmRJbmZvPigpO1xyXG4gIEBPdXRwdXQoKSBkcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wUmVzdWx0PigpO1xyXG4gIEBPdXRwdXQoKSBkcm9wUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BSZXN1bHQ+KCk7XHJcbiAgQElucHV0KCkgZ2V0Q2hpbGRQYXlsb2FkOiAoaW5kZXg6IG51bWJlcikgPT4ge307XHJcbiAgQElucHV0KClcclxuICBzaG91bGRBbmltYXRlRHJvcDogKFxyXG4gICAgc291cmNlQ29udGFpbmVyT3B0aW9uczogQ29udGFpbmVyT3B0aW9ucyxcclxuICAgIHBheWxvYWQ6IGFueVxyXG4gICkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHNob3VsZEFjY2VwdERyb3A6IChcclxuICAgIHNvdXJjZUNvbnRhaW5lck9wdGlvbnM6IENvbnRhaW5lck9wdGlvbnMsXHJcbiAgICBwYXlsb2FkOiBhbnlcclxuICApID0+IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIGRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldEdob3N0UGFyZW50OiAoKSA9PiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHNtb290aERuRChcclxuICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIHRoaXMuZ2V0T3B0aW9ucygpXHJcbiAgICApO1xyXG5cclxuICAgIGlmKHRoaXMudXNlVHJhbnNmb3JtRm9yR2hvc3QpIHRoaXMuY29udGFpbmVyLnVzZVRyYW5zZm9ybUZvckdob3N0ID0gdGhpcy51c2VUcmFuc2Zvcm1Gb3JHaG9zdDtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5kaXNwb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE9wdGlvbnMoKTogQ29udGFpbmVyT3B0aW9ucyB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBDb250YWluZXJPcHRpb25zID0ge307XHJcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbikgb3B0aW9ucy5vcmllbnRhdGlvbiA9IHRoaXMub3JpZW50YXRpb247XHJcbiAgICBpZiAodGhpcy5iZWhhdmlvdXIpIG9wdGlvbnMuYmVoYXZpb3VyID0gdGhpcy5iZWhhdmlvdXI7XHJcbiAgICBpZiAodGhpcy5ncm91cE5hbWUpIG9wdGlvbnMuZ3JvdXBOYW1lID0gdGhpcy5ncm91cE5hbWU7XHJcbiAgICBpZiAodGhpcy5sb2NrQXhpcykgb3B0aW9ucy5sb2NrQXhpcyA9IHRoaXMubG9ja0F4aXM7XHJcbiAgICBpZiAodGhpcy5kcmFnSGFuZGxlU2VsZWN0b3IpXHJcbiAgICAgIG9wdGlvbnMuZHJhZ0hhbmRsZVNlbGVjdG9yID0gdGhpcy5kcmFnSGFuZGxlU2VsZWN0b3I7XHJcbiAgICBpZiAodGhpcy5ub25EcmFnQXJlYVNlbGVjdG9yKVxyXG4gICAgICBvcHRpb25zLm5vbkRyYWdBcmVhU2VsZWN0b3IgPSB0aGlzLm5vbkRyYWdBcmVhU2VsZWN0b3I7XHJcbiAgICBpZiAodGhpcy5kcmFnQmVnaW5EZWxheSkgb3B0aW9ucy5kcmFnQmVnaW5EZWxheSA9IHRoaXMuZHJhZ0JlZ2luRGVsYXk7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25EdXJhdGlvbilcclxuICAgICAgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XHJcbiAgICBpZiAodGhpcy5hdXRvU2Nyb2xsRW5hYmxlZClcclxuICAgICAgb3B0aW9ucy5hdXRvU2Nyb2xsRW5hYmxlZCA9IHRoaXMuYXV0b1Njcm9sbEVuYWJsZWQ7XHJcbiAgICBpZiAodGhpcy5kcmFnQ2xhc3MpIG9wdGlvbnMuZHJhZ0NsYXNzID0gdGhpcy5kcmFnQ2xhc3M7XHJcbiAgICBpZiAodGhpcy5kcm9wQ2xhc3MpIG9wdGlvbnMuZHJvcENsYXNzID0gdGhpcy5kcm9wQ2xhc3M7XHJcbiAgICBpZiAodGhpcy5kcm9wUGxhY2Vob2xkZXIpIG9wdGlvbnMuZHJvcFBsYWNlaG9sZGVyID0gdGhpcy5kcm9wUGxhY2Vob2xkZXI7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlU2Nyb2xsT3ZlcmxhcERldGVjdGlvbikgb3B0aW9ucy5kaXNhYmxlU2Nyb2xsT3ZlcmxhcERldGVjdGlvbiA9IHRoaXMuZGlzYWJsZVNjcm9sbE92ZXJsYXBEZXRlY3Rpb247XHJcbiAgICBpZiAodGhpcy5kcmFnU3RhcnQpXHJcbiAgICAgIG9wdGlvbnMub25EcmFnU3RhcnQgPSAoaW5mbzogRHJhZ1N0YXJ0RW5kSW5mbykgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0LmVtaXQoaW5mbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ0VuZClcclxuICAgICAgb3B0aW9ucy5vbkRyYWdFbmQgPSAoaW5mbzogRHJhZ1N0YXJ0RW5kSW5mbykgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJhZ0VuZC5lbWl0KGluZm8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmRyb3ApXHJcbiAgICAgIG9wdGlvbnMub25Ecm9wID0gKGRyb3BSZXN1bHQ6IERyb3BSZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyb3AuZW1pdChkcm9wUmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5nZXRDaGlsZFBheWxvYWQpIG9wdGlvbnMuZ2V0Q2hpbGRQYXlsb2FkID0gdGhpcy5nZXRDaGlsZFBheWxvYWQ7XHJcbiAgICBpZiAodGhpcy5zaG91bGRBbmltYXRlRHJvcClcclxuICAgICAgb3B0aW9ucy5zaG91bGRBbmltYXRlRHJvcCA9IHRoaXMuc2hvdWxkQW5pbWF0ZURyb3A7XHJcbiAgICBpZiAodGhpcy5zaG91bGRBY2NlcHREcm9wKSBvcHRpb25zLnNob3VsZEFjY2VwdERyb3AgPSB0aGlzLnNob3VsZEFjY2VwdERyb3A7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ0VudGVyKVxyXG4gICAgICBvcHRpb25zLm9uRHJhZ0VudGVyID0gKCkgPT4gdGhpcy5nZXROZ1pvbmUoKCkgPT4gdGhpcy5kcmFnRW50ZXIuZW1pdCgpKTtcclxuICAgIGlmICh0aGlzLmRyYWdMZWF2ZSlcclxuICAgICAgb3B0aW9ucy5vbkRyYWdMZWF2ZSA9ICgpID0+IHRoaXMuZ2V0Tmdab25lKCgpID0+IHRoaXMuZHJhZ0xlYXZlLmVtaXQoKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJvcFJlYWR5KVxyXG4gICAgICBvcHRpb25zLm9uRHJvcFJlYWR5ID0gKGRyb3BSZXN1bHQ6IERyb3BSZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyb3BSZWFkeS5lbWl0KGRyb3BSZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5nZXRHaG9zdFBhcmVudCkgb3B0aW9ucy5nZXRHaG9zdFBhcmVudCA9IHRoaXMuZ2V0R2hvc3RQYXJlbnQ7XHJcblxyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5nWm9uZShjbGIpIHtcclxuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICBjbGIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=