export interface IInputSimples {
    placeholder: string;
    style: React.CSSProperties;
    onChange: React.EventHandler<any>;
}

export interface IButtonGlitch {
    title: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ICheckmark {
    checked: boolean;
    setChecked: (checked: boolean) => void;
}

export interface ICardColorful {
    content: React.ReactNode;
}