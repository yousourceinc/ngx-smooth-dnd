/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
import { constants } from '@yousource/smooth-dnd';
const { wrapperClass, animationClass } = constants;
/** @type {?} */
const constantClasses = {
    [wrapperClass]: true,
    [animationClass]: true,
};
export class DraggableComponent {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.wrapper.nativeElement.parentNode.className = constants.wrapperClass;
    }
}
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
if (false) {
    /** @type {?} */
    DraggableComponent.prototype.wrapper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B5b3Vzb3VyY2Uvbmd4LXNtb290aC1kbmQvIiwic291cmNlcyI6WyJzcmMvZHJhZ2dhYmxlL2RyYWdnYWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO01BQzVDLEVBQ0osWUFBWSxFQUNaLGNBQWMsRUFDZixHQUFHLFNBQVM7O01BRVAsZUFBZSxHQUFHO0lBQ3RCLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSTtJQUNwQixDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUk7Q0FDdkI7QUFPRCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBRTdCLGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7SUFDM0UsQ0FBQzs7O1lBVEYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxnR0FBeUM7YUFDMUM7OztzQkFFRSxTQUFTLFNBQUMsa0JBQWtCOzs7O0lBQTdCLHFDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJ0B5b3Vzb3VyY2Uvc21vb3RoLWRuZCc7XHJcbmNvbnN0IHtcclxuICB3cmFwcGVyQ2xhc3MsXHJcbiAgYW5pbWF0aW9uQ2xhc3NcclxufSA9IGNvbnN0YW50cztcclxuXHJcbmNvbnN0IGNvbnN0YW50Q2xhc3NlcyA9IHtcclxuICBbd3JhcHBlckNsYXNzXTogdHJ1ZSxcclxuICBbYW5pbWF0aW9uQ2xhc3NdOiB0cnVlLFxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnc21vb3RoLWRuZC1kcmFnZ2FibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kcmFnZ2FibGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKCdkcmFnZ2FibGVXcmFwcGVyJykgd3JhcHBlcjogRWxlbWVudFJlZjtcclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLndyYXBwZXIubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9IGNvbnN0YW50cy53cmFwcGVyQ2xhc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==