import { ReactNode } from "react";

interface IIconProps {
    size?: "sm" | "md" | "lg" | "xl" | "xxl"
}

function Icon(callback: (size: number) => ReactNode) {
    return function ({
        size: sizeProp = "md"
    }: IIconProps) {
        const size = 
            sizeProp === "sm" ? 12 :
            sizeProp === "md" ? 16 :
            sizeProp === "lg" ? 24 :
            sizeProp === "xl" ? 30 :
            sizeProp === "xxl" ? 40 :
            60;
        
        return callback(size);
    }
}

export const PhoneIcon = Icon((size) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"><path fill="currentColor" d="m449.366 89.648l-.685-.428l-86.593-42.661l-93.463 124.617l43 57.337a88.53 88.53 0 0 1-83.115 83.114l-57.336-43l-124.616 93.461l42.306 85.869l.356.725l.429.684a25.09 25.09 0 0 0 21.393 11.857h22.344a327.836 327.836 0 0 0 327.836-327.837v-22.345a25.08 25.08 0 0 0-11.856-21.393m-20.144 43.738c0 163.125-132.712 295.837-295.836 295.837h-18.08L87 371.76l84.18-63.135l46.867 35.149h5.333a120.535 120.535 0 0 0 120.4-120.4v-5.333l-35.149-46.866L371.759 87l57.463 28.311Z" strokeWidth={7} stroke="#d5d5d5"></path></svg>
));

export const LoginIcon = Icon((size) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}><path strokeLinejoin="round" d="M2.001 11.999h14m0 0l-3.5-3m3.5 3l-3.5 3"></path><path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879c-.768-.768-.865-1.946-.877-4.121"></path></g></svg>
));

export const SecureIcon = Icon((size) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill="currentColor" d="M22 3.94L12 .44L2 3.94V12c0 4.127 2.534 7.012 4.896 8.803a19.8 19.8 0 0 0 4.65 2.595q.17.064.342.122l.112.04l.114-.04a14 14 0 0 0 .65-.244a19.7 19.7 0 0 0 4.34-2.473C19.467 19.012 22 16.127 22 12zM11.001 15.415L6.76 11.172l1.414-1.415l2.828 2.829l5.657-5.657l1.415 1.414z" strokeWidth={0.2} stroke="#d5d5d5"></path></svg>
));

export const NextStepIcon = Icon((size) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5v14l8-7zm11 0v14l8-7z"></path></svg>
));

export const SearchIcon = Icon((size) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill="currentColor" d="M10 4a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10" strokeWidth={0.2} stroke="#d5d5d5"></path></svg>
));

export const BackIcon = Icon((size) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill="currentColor" d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1" strokeWidth={0.2} stroke="#d5d5d5"></path></svg>
));

export const NotificationIcon = Icon((size) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill="currentColor" d="M6.429 2.413a.75.75 0 0 0-1.13-.986l-1.292 1.48a4.75 4.75 0 0 0-1.17 3.024L2.78 8.65a.75.75 0 0 0 1.5.031l.056-2.718a3.25 3.25 0 0 1 .801-2.069z" strokeWidth={0.2} stroke="#d5d5d5"></path><path fill="currentColor" fillRule="evenodd" d="M6.237 7.7a4.214 4.214 0 0 1 4.206-3.95H11V3a1 1 0 1 1 2 0v.75h.557a4.214 4.214 0 0 1 4.206 3.95l.221 3.534a7.4 7.4 0 0 0 1.308 3.754a1.617 1.617 0 0 1-1.135 2.529l-3.407.408V19a2.75 2.75 0 1 1-5.5 0v-1.075l-3.407-.409a1.617 1.617 0 0 1-1.135-2.528a7.4 7.4 0 0 0 1.308-3.754zM10.75 19a1.25 1.25 0 0 0 2.5 0v-.75h-2.5z" clipRule="evenodd" strokeWidth={0.2} stroke="#d5d5d5"></path><path fill="currentColor" d="M17.643 1.355a.75.75 0 0 0-.072 1.058l1.292 1.48a3.25 3.25 0 0 1 .8 2.07l.057 2.717a.75.75 0 1 0 1.5-.031l-.057-2.718a4.75 4.75 0 0 0-1.17-3.024l-1.292-1.48a.75.75 0 0 0-1.058-.072" strokeWidth={0.2} stroke="#d5d5d5"></path></svg>
));

export const DotsVerticalIcon = Icon((size) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill="currentColor" d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2" strokeWidth={0.2} stroke="#d5d5d5"></path></svg>
));

export const EmojiIcon = Icon((size) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32"><path fill="currentColor" d="M12 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0M9.553 19.106a1 1 0 0 1 1.338.44l.003.006l.034.058c.035.057.093.146.177.259c.169.225.44.536.832.85C12.71 21.337 13.993 22 16 22s3.29-.663 4.063-1.28c.393-.315.664-.626.832-.851a3 3 0 0 0 .211-.317l.004-.007a1 1 0 0 1 1.785.902v.001l-.002.002v.002l-.004.006l-.008.015a3 3 0 0 1-.1.175a5 5 0 0 1-.285.42a6.8 6.8 0 0 1-1.184 1.213C20.21 23.163 18.493 24 16 24s-4.21-.837-5.312-1.72a6.8 6.8 0 0 1-1.183-1.211a5 5 0 0 1-.386-.596l-.008-.015l-.003-.006l-.001-.003l-.001-.002a1 1 0 0 1 .447-1.341M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14S23.732 2 16 2M4 16C4 9.373 9.373 4 16 4s12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16" strokeWidth={0.4} stroke="#d5d5d5"></path></svg>
));

export const SendIcon = Icon((size) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"><path fill="currentColor" d="M474.444 19.857a20.34 20.34 0 0 0-21.592-2.781L33.737 213.8v38.066l176.037 70.414L322.69 496h38.074l120.3-455.4a20.34 20.34 0 0 0-6.62-20.743M337.257 459.693L240.2 310.37l149.353-163.582l-23.631-21.576L215.4 290.069L70.257 232.012L443.7 56.72Z" strokeWidth={7} stroke="#d5d5d5"></path></svg>
));