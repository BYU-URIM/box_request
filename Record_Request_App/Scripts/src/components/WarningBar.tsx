import * as React from 'react'
import { IFolderData, IBoxData } from '../models/MockData'
import { folderData } from '../res/folderdata'
import { AppStyles } from '../components'
import { MessageBar, MessageBarButton, MessageBarType } from 'office-ui-fabric-react';
import { Link } from 'react-router-dom';

export interface IWarningBar {
}

// ----------------------------------------------

const log = (text: string): () => void => (): void => console.log(text)

export function WarningBar(props: IWarningBar) {
    return(
        <div>
            <MessageBar
            messageBarType={ MessageBarType.warning }
            isMultiline={ false }
            onDismiss={ log('test') }
            dismissButtonAriaLabel='Close'
            actions={
                <div>
            <MessageBarButton>Action</MessageBarButton>
            </div>
            }
            >
            Warning lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit. <a href='www.bing.com'>Visit our website.</a>
            </MessageBar>
        </div>
    )
}