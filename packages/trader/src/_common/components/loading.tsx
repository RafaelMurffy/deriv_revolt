import classNames from 'classnames';
import React from 'react';

type LoadingProps = {
    className?: string;
    is_invisible?: boolean;
    theme?: string;
    id?: string;
};

const Loading = ({ className, is_invisible, theme, id }: LoadingProps) => (
    <div
        id={id}
        className={classNames('barspinner', `barspinner--${theme || 'dark'}`, { invisible: is_invisible }, className)}
    >
        {Array.from(new Array(5)).map((_x, inx) => (
            <div key={inx} className={`barspinner__rect barspinner__rect--${inx + 1} rect${inx + 1}`} />
        ))}
    </div>
);

export default Loading;
