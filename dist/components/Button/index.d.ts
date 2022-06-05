/// <reference types="react" />
export declare enum ButtonSize {
    Large = "large",
    Small = "small",
    Middle = "middle"
}
export declare enum ButtonType {
    Primary = "primary",
    Default = "default",
    Danger = "danger",
    Link = "link"
}
interface BaseButtonPropTypes {
    className?: string;
    disabled?: boolean;
    size?: 'large' | 'small' | 'middle';
    type?: ButtonType[keyof ButtonType];
    href?: string;
    htmlType?: "button" | "submit" | "reset";
    children: React.ReactNode;
}
declare type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
declare type AnchorNuttonProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
export declare const Button: React.FC<BaseButtonPropTypes & Omit<NativeButtonProps, "type"> & AnchorNuttonProps>;
export {};
