var _a;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
import { constants } from '@yousource/smooth-dnd';
var wrapperClass = constants.wrapperClass, animationClass = constants.animationClass;
/** @type {?} */
var constantClasses = (_a = {},
    _a[wrapperClass] = true,
    _a[animationClass] = true,
    _a);
var DraggableComponent = /** @class */ (function () {
    function DraggableComponent() {
    }
    /**
     * @return {?}
     */
    DraggableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.wrapper.nativeElement.parentNode.className = constants.wrapperClass;
    };
    DraggableComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'smooth-dnd-draggable',
                    template: "<ng-container #draggableWrapper>\r\n    <ng-content></ng-content>\r\n</ng-container>"
                }] }
    ];
    DraggableComponent.propDecorators = {
        wrapper: [{ type: ViewChild, args: ['draggableWrapper',] }]
    };
    return DraggableComponent;
}());
export { DraggableComponent };
if (false) {
    /** @type {?} */
    DraggableComponent.prototype.wrapper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B5b3Vzb3VyY2Uvbmd4LXNtb290aC1kbmQvIiwic291cmNlcyI6WyJzcmMvZHJhZ2dhYmxlL2RyYWdnYWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRCxJQUFBLHFDQUFZLEVBQ1oseUNBQWM7O0lBR1YsZUFBZTtJQUNuQixHQUFDLFlBQVksSUFBRyxJQUFJO0lBQ3BCLEdBQUMsY0FBYyxJQUFHLElBQUk7T0FDdkI7QUFFRDtJQUFBO0lBVUEsQ0FBQzs7OztJQUhDLDRDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztJQUMzRSxDQUFDOztnQkFURixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLGdHQUF5QztpQkFDMUM7OzswQkFFRSxTQUFTLFNBQUMsa0JBQWtCOztJQUkvQix5QkFBQztDQUFBLEFBVkQsSUFVQztTQUxZLGtCQUFrQjs7O0lBQzdCLHFDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJ0B5b3Vzb3VyY2Uvc21vb3RoLWRuZCc7XHJcbmNvbnN0IHtcclxuICB3cmFwcGVyQ2xhc3MsXHJcbiAgYW5pbWF0aW9uQ2xhc3NcclxufSA9IGNvbnN0YW50cztcclxuXHJcbmNvbnN0IGNvbnN0YW50Q2xhc3NlcyA9IHtcclxuICBbd3JhcHBlckNsYXNzXTogdHJ1ZSxcclxuICBbYW5pbWF0aW9uQ2xhc3NdOiB0cnVlLFxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnc21vb3RoLWRuZC1kcmFnZ2FibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kcmFnZ2FibGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKCdkcmFnZ2FibGVXcmFwcGVyJykgd3JhcHBlcjogRWxlbWVudFJlZjtcclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLndyYXBwZXIubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9IGNvbnN0YW50cy53cmFwcGVyQ2xhc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==