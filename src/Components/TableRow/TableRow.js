import React from 'react'

import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CloudDoneIcon from '@material-ui/icons/CloudDone';

import { item } from '../../utils/util';


function TableRow({ id, sno, mailId, subject, body, date, type }) {

    const history = useHistory();

    const cancelMail = () => {

    }

    const onMailClick = () => {
        history.push(`/singlemail/${id}`);
    }

    return (
        <motion.div variants={item} className="row body__row">
            <td onClick={onMailClick}>{sno}</td>
            <td onClick={onMailClick}>{mailId}</td>
            <td onClick={onMailClick}><p className="line-clamp-1">{subject} </p></td>
            <td onClick={onMailClick}>{date} </td>
            {
                type === 'sent' ?
                    <td><CloudDoneIcon style={{ color: 'green' }} /></td>
                    :
                    <td onClick={cancelMail}><CancelOutlinedIcon className="cancel" /></td>
            }
        </motion.div>
    )
}

export default TableRow
