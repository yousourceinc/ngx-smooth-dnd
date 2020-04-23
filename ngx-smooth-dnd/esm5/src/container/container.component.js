import * as tslib_1 from "tslib";
import { Component, ContentChildren, QueryList, AfterContentInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { DraggableComponent } from '../draggable/draggable.component';
import { dropHandlers, smoothDnD } from '@yousource/smooth-dnd';
smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler;
smoothDnD.wrapChild = false;
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
    ContainerComponent.prototype.ngAfterViewInit = function () {
        this.container = smoothDnD(this.containerElementRef.nativeElement, this.getOptions());
        if (this.useTransformForGhost)
            this.container.useTransformForGhost = this.useTransformForGhost;
    };
    ContainerComponent.prototype.ngOnDestroy = function () {
        this.container.dispose();
    };
    ContainerComponent.prototype.getOptions = function () {
        var _this = this;
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
    ContainerComponent.prototype.getNgZone = function (clb) {
        this._ngZone.run(function () {
            clb();
        });
    };
    ContainerComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
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
    return ContainerComponent;
}());
export { ContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B5b3Vzb3VyY2Uvbmd4LXNtb290aC1kbmQvIiwic291cmNlcyI6WyJzcmMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0TCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBZ0MsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RixTQUFTLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sQ0FBQztBQUNoRSxTQUFTLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQWE1QjtJQTJDRSw0QkFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFyQnpCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUNqRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDL0MsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDdEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFZM0MsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFLRixDQUFDO0lBRXhDLDRDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFDdEMsSUFBSSxDQUFD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TSxFQUFFOzt5REFBZ0M7SUFDL0I7UUFBVCxNQUFNLEVBQUU7O3lEQUFnQztJQUd6QztRQURDLEtBQUssRUFBRTs7OERBQzBCO0lBekN2QixrQkFBa0I7UUFMOUIsU0FBUyxDQUFDO1lBQ1QsOENBQThDO1lBQzlDLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsdUVBQXlDO1NBQzFDLENBQUM7aURBNEM2QixNQUFNO09BM0N4QixrQkFBa0IsQ0E0SDlCO0lBQUQseUJBQUM7Q0FBQSxBQTVIRCxJQTRIQztTQTVIWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEcmFnZ2FibGVDb21wb25lbnQgfSBmcm9tICcuLi9kcmFnZ2FibGUvZHJhZ2dhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGRyb3BIYW5kbGVycywgc21vb3RoRG5ELCBEcm9wUmVzdWx0LCBDb250YWluZXJPcHRpb25zIH0gZnJvbSAnQHlvdXNvdXJjZS9zbW9vdGgtZG5kJztcclxuXHJcbnNtb290aERuRC5kcm9wSGFuZGxlciA9IGRyb3BIYW5kbGVycy5yZWFjdERyb3BIYW5kbGVyKCkuaGFuZGxlcjtcclxuc21vb3RoRG5ELndyYXBDaGlsZCA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcmFnU3RhcnRFbmRJbmZvIHtcclxuICBpc1NvdXJjZTogYm9vbGVhbjtcclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgd2lsbEFjY2VwdERyb3A6IGJvb2xlYW47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogXCJzbW9vdGgtZG5kLWNvbnRhaW5lclwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY29udGFpbmVyLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBjb250YWluZXI6IGFueTtcclxuICBAQ29udGVudENoaWxkcmVuKERyYWdnYWJsZUNvbXBvbmVudClcclxuICBkcmFnZ2FibGVzOiBRdWVyeUxpc3Q8RHJhZ2dhYmxlQ29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lckVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dChcIm9yaWVudGF0aW9uXCIpIG9yaWVudGF0aW9uO1xyXG4gIEBJbnB1dChcImJlaGF2aW91clwiKSBiZWhhdmlvdXI7XHJcbiAgQElucHV0KFwiZ3JvdXBOYW1lXCIpIGdyb3VwTmFtZTtcclxuICBASW5wdXQoXCJsb2NrQXhpc1wiKSBsb2NrQXhpcztcclxuICBASW5wdXQoXCJkcmFnSGFuZGxlU2VsZWN0b3JcIikgZHJhZ0hhbmRsZVNlbGVjdG9yO1xyXG4gIEBJbnB1dChcIm5vbkRyYWdBcmVhU2VsZWN0b3JcIikgbm9uRHJhZ0FyZWFTZWxlY3RvcjtcclxuICBASW5wdXQoXCJkcmFnQmVnaW5EZWxheVwiKSBkcmFnQmVnaW5EZWxheTtcclxuICBASW5wdXQoXCJhbmltYXRpb25EdXJhdGlvblwiKSBhbmltYXRpb25EdXJhdGlvbjtcclxuICBASW5wdXQoXCJhdXRvU2Nyb2xsRW5hYmxlZFwiKSBhdXRvU2Nyb2xsRW5hYmxlZDtcclxuICBASW5wdXQoXCJkcmFnQ2xhc3NcIikgZHJhZ0NsYXNzO1xyXG4gIEBJbnB1dChcImRyb3BDbGFzc1wiKSBkcm9wQ2xhc3M7XHJcbiAgQElucHV0KFwiZHJvcFBsYWNlaG9sZGVyXCIpIGRyb3BQbGFjZWhvbGRlcjtcclxuICBASW5wdXQoXCJyZW1vdmVPbkRyb3BPdXRcIikgcmVtb3ZlT25Ecm9wT3V0O1xyXG4gIEBJbnB1dChcImRpc2FibGVTY3JvbGxPdmVybGFwRGV0ZWN0aW9uXCIpIGRpc2FibGVTY3JvbGxPdmVybGFwRGV0ZWN0aW9uO1xyXG4gIEBJbnB1dChcInVzZVRyYW5zZm9ybUZvckdob3N0XCIpIHVzZVRyYW5zZm9ybUZvckdob3N0O1xyXG5cclxuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnU3RhcnRFbmRJbmZvPigpO1xyXG4gIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnU3RhcnRFbmRJbmZvPigpO1xyXG4gIEBPdXRwdXQoKSBkcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wUmVzdWx0PigpO1xyXG4gIEBPdXRwdXQoKSBkcm9wUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BSZXN1bHQ+KCk7XHJcbiAgQElucHV0KCkgZ2V0Q2hpbGRQYXlsb2FkOiAoaW5kZXg6IG51bWJlcikgPT4ge307XHJcbiAgQElucHV0KClcclxuICBzaG91bGRBbmltYXRlRHJvcDogKFxyXG4gICAgc291cmNlQ29udGFpbmVyT3B0aW9uczogQ29udGFpbmVyT3B0aW9ucyxcclxuICAgIHBheWxvYWQ6IGFueVxyXG4gICkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHNob3VsZEFjY2VwdERyb3A6IChcclxuICAgIHNvdXJjZUNvbnRhaW5lck9wdGlvbnM6IENvbnRhaW5lck9wdGlvbnMsXHJcbiAgICBwYXlsb2FkOiBhbnlcclxuICApID0+IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIGRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldEdob3N0UGFyZW50OiAoKSA9PiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHNtb290aERuRChcclxuICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIHRoaXMuZ2V0T3B0aW9ucygpXHJcbiAgICApO1xyXG5cclxuICAgIGlmKHRoaXMudXNlVHJhbnNmb3JtRm9yR2hvc3QpIHRoaXMuY29udGFpbmVyLnVzZVRyYW5zZm9ybUZvckdob3N0ID0gdGhpcy51c2VUcmFuc2Zvcm1Gb3JHaG9zdDtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5kaXNwb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE9wdGlvbnMoKTogQ29udGFpbmVyT3B0aW9ucyB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBDb250YWluZXJPcHRpb25zID0ge307XHJcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbikgb3B0aW9ucy5vcmllbnRhdGlvbiA9IHRoaXMub3JpZW50YXRpb247XHJcbiAgICBpZiAodGhpcy5iZWhhdmlvdXIpIG9wdGlvbnMuYmVoYXZpb3VyID0gdGhpcy5iZWhhdmlvdXI7XHJcbiAgICBpZiAodGhpcy5ncm91cE5hbWUpIG9wdGlvbnMuZ3JvdXBOYW1lID0gdGhpcy5ncm91cE5hbWU7XHJcbiAgICBpZiAodGhpcy5sb2NrQXhpcykgb3B0aW9ucy5sb2NrQXhpcyA9IHRoaXMubG9ja0F4aXM7XHJcbiAgICBpZiAodGhpcy5kcmFnSGFuZGxlU2VsZWN0b3IpXHJcbiAgICAgIG9wdGlvbnMuZHJhZ0hhbmRsZVNlbGVjdG9yID0gdGhpcy5kcmFnSGFuZGxlU2VsZWN0b3I7XHJcbiAgICBpZiAodGhpcy5ub25EcmFnQXJlYVNlbGVjdG9yKVxyXG4gICAgICBvcHRpb25zLm5vbkRyYWdBcmVhU2VsZWN0b3IgPSB0aGlzLm5vbkRyYWdBcmVhU2VsZWN0b3I7XHJcbiAgICBpZiAodGhpcy5kcmFnQmVnaW5EZWxheSkgb3B0aW9ucy5kcmFnQmVnaW5EZWxheSA9IHRoaXMuZHJhZ0JlZ2luRGVsYXk7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25EdXJhdGlvbilcclxuICAgICAgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XHJcbiAgICBpZiAodGhpcy5hdXRvU2Nyb2xsRW5hYmxlZClcclxuICAgICAgb3B0aW9ucy5hdXRvU2Nyb2xsRW5hYmxlZCA9IHRoaXMuYXV0b1Njcm9sbEVuYWJsZWQ7XHJcbiAgICBpZiAodGhpcy5kcmFnQ2xhc3MpIG9wdGlvbnMuZHJhZ0NsYXNzID0gdGhpcy5kcmFnQ2xhc3M7XHJcbiAgICBpZiAodGhpcy5kcm9wQ2xhc3MpIG9wdGlvbnMuZHJvcENsYXNzID0gdGhpcy5kcm9wQ2xhc3M7XHJcbiAgICBpZiAodGhpcy5kcm9wUGxhY2Vob2xkZXIpIG9wdGlvbnMuZHJvcFBsYWNlaG9sZGVyID0gdGhpcy5kcm9wUGxhY2Vob2xkZXI7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlU2Nyb2xsT3ZlcmxhcERldGVjdGlvbikgb3B0aW9ucy5kaXNhYmxlU2Nyb2xsT3ZlcmxhcERldGVjdGlvbiA9IHRoaXMuZGlzYWJsZVNjcm9sbE92ZXJsYXBEZXRlY3Rpb247XHJcbiAgICBpZiAodGhpcy5kcmFnU3RhcnQpXHJcbiAgICAgIG9wdGlvbnMub25EcmFnU3RhcnQgPSAoaW5mbzogRHJhZ1N0YXJ0RW5kSW5mbykgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0LmVtaXQoaW5mbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ0VuZClcclxuICAgICAgb3B0aW9ucy5vbkRyYWdFbmQgPSAoaW5mbzogRHJhZ1N0YXJ0RW5kSW5mbykgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJhZ0VuZC5lbWl0KGluZm8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmRyb3ApXHJcbiAgICAgIG9wdGlvbnMub25Ecm9wID0gKGRyb3BSZXN1bHQ6IERyb3BSZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyb3AuZW1pdChkcm9wUmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5nZXRDaGlsZFBheWxvYWQpIG9wdGlvbnMuZ2V0Q2hpbGRQYXlsb2FkID0gdGhpcy5nZXRDaGlsZFBheWxvYWQ7XHJcbiAgICBpZiAodGhpcy5zaG91bGRBbmltYXRlRHJvcClcclxuICAgICAgb3B0aW9ucy5zaG91bGRBbmltYXRlRHJvcCA9IHRoaXMuc2hvdWxkQW5pbWF0ZURyb3A7XHJcbiAgICBpZiAodGhpcy5zaG91bGRBY2NlcHREcm9wKSBvcHRpb25zLnNob3VsZEFjY2VwdERyb3AgPSB0aGlzLnNob3VsZEFjY2VwdERyb3A7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ0VudGVyKVxyXG4gICAgICBvcHRpb25zLm9uRHJhZ0VudGVyID0gKCkgPT4gdGhpcy5nZXROZ1pvbmUoKCkgPT4gdGhpcy5kcmFnRW50ZXIuZW1pdCgpKTtcclxuICAgIGlmICh0aGlzLmRyYWdMZWF2ZSlcclxuICAgICAgb3B0aW9ucy5vbkRyYWdMZWF2ZSA9ICgpID0+IHRoaXMuZ2V0Tmdab25lKCgpID0+IHRoaXMuZHJhZ0xlYXZlLmVtaXQoKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJvcFJlYWR5KVxyXG4gICAgICBvcHRpb25zLm9uRHJvcFJlYWR5ID0gKGRyb3BSZXN1bHQ6IERyb3BSZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyb3BSZWFkeS5lbWl0KGRyb3BSZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5nZXRHaG9zdFBhcmVudCkgb3B0aW9ucy5nZXRHaG9zdFBhcmVudCA9IHRoaXMuZ2V0R2hvc3RQYXJlbnQ7XHJcblxyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5nWm9uZShjbGIpIHtcclxuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICBjbGIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=