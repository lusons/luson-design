var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Large"] = "large";
    ButtonSize["Small"] = "small";
    ButtonSize["Middle"] = "middle";
})(ButtonSize || (ButtonSize = {}));
export var ButtonType;
(function (ButtonType) {
    ButtonType["Primary"] = "primary";
    ButtonType["Default"] = "default";
    ButtonType["Danger"] = "danger";
    ButtonType["Link"] = "link";
})(ButtonType || (ButtonType = {}));
export var Button = function (_a) {
    var _b;
    var className = _a.className, _c = _a.disabled, disabled = _c === void 0 ? false : _c, size = _a.size, type = _a.type, href = _a.href, children = _a.children, htmlType = _a.htmlType, resetProps = __rest(_a, ["className", "disabled", "size", "type", "href", "children", "htmlType"]);
    var classes = classNames("btn", className, (_b = {},
        _b["btn-".concat(type)] = type,
        _b["btn-".concat(size)] = size !== 'middle',
        _b.disabled = type === ButtonType.Link && disabled,
        _b));
    if (type === ButtonType.Link) {
        return (_jsx("a", __assign({ className: classes, href: href }, resetProps, { children: children })));
    }
    return (_jsx("button", __assign({ className: classes, disabled: disabled, type: htmlType }, resetProps, { children: children })));
};
