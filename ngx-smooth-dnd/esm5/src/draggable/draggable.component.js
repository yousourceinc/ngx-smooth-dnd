import * as tslib_1 from "tslib";
var _a;
import { Component, ViewChild, ElementRef } from '@angular/core';
import { constants } from '@yousource/smooth-dnd';
var wrapperClass = constants.wrapperClass, animationClass = constants.animationClass;
var constantClasses = (_a = {},
    _a[wrapperClass] = true,
    _a[animationClass] = true,
    _a);
var DraggableComponent = /** @class */ (function () {
    function DraggableComponent() {
    }
    DraggableComponent.prototype.ngAfterViewInit = function () {
        this.wrapper.nativeElement.parentNode.className = constants.wrapperClass;
    };
    tslib_1.__decorate([
        ViewChild('draggableWrapper'),
        tslib_1.__metadata("design:type", ElementRef)
    ], DraggableComponent.prototype, "wrapper", void 0);
    DraggableComponent = tslib_1.__decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: 'smooth-dnd-draggable',
            template: "<ng-container #draggableWrapper>\r\n    <ng-content></ng-content>\r\n</ng-container>"
        })
    ], DraggableComponent);
    return DraggableComponent;
}());
export { DraggableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B5b3Vzb3VyY2Uvbmd4LXNtb290aC1kbmQvIiwic291cmNlcyI6WyJzcmMvZHJhZ2dhYmxlL2RyYWdnYWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRCxJQUFBLHFDQUFZLEVBQ1oseUNBQWMsQ0FDRjtBQUVkLElBQU0sZUFBZTtJQUNuQixHQUFDLFlBQVksSUFBRyxJQUFJO0lBQ3BCLEdBQUMsY0FBYyxJQUFHLElBQUk7T0FDdkIsQ0FBQztBQU9GO0lBQUE7SUFLQSxDQUFDO0lBSEMsNENBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztJQUMzRSxDQUFDO0lBSDhCO1FBQTlCLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQzswQ0FBVSxVQUFVO3VEQUFDO0lBRHhDLGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDVCw4Q0FBOEM7WUFDOUMsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxnR0FBeUM7U0FDMUMsQ0FBQztPQUNXLGtCQUFrQixDQUs5QjtJQUFELHlCQUFDO0NBQUEsQUFMRCxJQUtDO1NBTFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnQHlvdXNvdXJjZS9zbW9vdGgtZG5kJztcclxuY29uc3Qge1xyXG4gIHdyYXBwZXJDbGFzcyxcclxuICBhbmltYXRpb25DbGFzc1xyXG59ID0gY29uc3RhbnRzO1xyXG5cclxuY29uc3QgY29uc3RhbnRDbGFzc2VzID0ge1xyXG4gIFt3cmFwcGVyQ2xhc3NdOiB0cnVlLFxyXG4gIFthbmltYXRpb25DbGFzc106IHRydWUsXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzbW9vdGgtZG5kLWRyYWdnYWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYWdnYWJsZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ2RyYWdnYWJsZVdyYXBwZXInKSB3cmFwcGVyOiBFbGVtZW50UmVmO1xyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMud3JhcHBlci5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuY2xhc3NOYW1lID0gY29uc3RhbnRzLndyYXBwZXJDbGFzcztcclxuICB9XHJcbn1cclxuIl19