import { FC } from 'react';
import { useIntl } from 'react-intl';

export const LadingScreen: FC = () => {
    const { formatMessage } = useIntl();

    return (
        <div>
            <h1>
                {formatMessage({ id: 'landing' })}
            </h1>
        </div>
    );
};
