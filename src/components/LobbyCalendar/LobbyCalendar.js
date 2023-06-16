import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/LobbyCreation/LobbyCalendar.css';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import IconButton from '@mui/material/IconButton';
import {ArrowBack, ArrowForward} from '@mui/icons-material';
import theme from '../../util/colorPallet';
import '../../css/fonts.css';
import {format} from 'date-fns';

export const LobbyCalendar = forwardRef(({disabled, dateChange}, ref) => {
    const [date, setDate] = useState(new Date());
    const [chosenDate, setChosenDate] = useState(null);

    const prevMonth = () => {
        setDate((prevDate) => {
            return new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
        });
    };
    const nextMonth = () => {
        setDate((prevDate) => {
            return new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
        });
    };

    const handleCellClick = (event) => {
        const day = parseInt(event.target.textContent);
        const chosenDate = new Date(date.getFullYear(), date.getMonth(), day);
        setChosenDate(chosenDate);
        dateChange(chosenDate);
    };

    const getCalendarRows = () => {
        const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
        const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const startDate = new Date(monthStart);
        startDate.setDate(
            startDate.getDate() - (startDate.getDay() === 0 ? 6 : startDate.getDay() - 1)
        );
        const endDate = new Date(monthEnd);
        endDate.setDate(
            endDate.getDate() + (6 - (endDate.getDay() === 0 ? 6 : endDate.getDay() - 1))
        );

        const rows = [];

        let currentDay = new Date(startDate);

        while (currentDay <= endDate) {
            const row = [];
            for (let i = 0; i < 7; i++) {
                const isPastDate =
                    new Date(
                        currentDay.getFullYear(),
                        currentDay.getMonth(),
                        currentDay.getDate()
                    ) < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
                const isToday =
                    new Date(
                        currentDay.getFullYear(),
                        currentDay.getMonth(),
                        currentDay.getDate()
                    ).toDateString() ===
                    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toDateString();
                const isDiffMonth = currentDay.getMonth() !== date.getMonth();
                const isThisMonth = currentDay.getMonth() === date.getMonth();
                const isSelected =
                    chosenDate &&
                    currentDay.toDateString() === chosenDate.toDateString();

                row.push(
                    <td
                        onClick={handleCellClick}
                        key={currentDay.toISOString()}
                        className={`text-position ${isPastDate ? 'not-clickable-date' : ''} ${
                            isDiffMonth ? 'text-muted not-clickable-date' : ''
                        } ${isThisMonth && isPastDate ? 'past-day' : ''} ${
                            isSelected ? 'chosenDate' : ''
                        }`}
                    >
            <span className={`text-position ${isToday && isThisMonth ? 'today' : ''}`}>
              {currentDay.getDate()}
            </span>
                    </td>
                );
                currentDay.setDate(currentDay.getDate() + 1);
            }
            rows.push(<tr key={currentDay.toISOString()}>{row}</tr>);
        }

        return rows;
    };

    const clearChecked = () => {
        setChosenDate(null);
    };

    useImperativeHandle(ref, () => ({
        clearChecked
    }));

    return (
        <div className={`container ${disabled ? 'disabled' : ''}`}>
            <Row className="justify-content-center">
                <Col xs={12}>
                    <div className={'my-4'}>
                        <div className="card-header">
                            <Row className="Justify-content-around align-items-center">
                                <Col xs={1} className="text-left">
                                    <IconButton
                                        sx={{
                                            backgroundColor: theme.palette.primary.main,
                                            color: theme.palette.primary.contrastText,
                                            ':hover': {
                                                backgroundColor: theme.palette.primary.dark,
                                            },
                                            borderRadius: '50%',
                                        }}
                                        className={'p-1'}
                                        onClick={prevMonth}
                                    >
                                        <ArrowBack/>
                                    </IconButton>
                                </Col>
                                <Col xs={10} className="text-left">
                                    <h5 className="text-center">
                                        {date.toLocaleDateString('hr-RH', {month: 'long', year: 'numeric'})}
                                    </h5>
                                </Col>
                                <Col xs={1} className="text-right">
                                    <IconButton
                                        sx={{
                                            backgroundColor: theme.palette.primary.main,
                                            color: theme.palette.primary.contrastText,
                                            ':hover': {
                                                backgroundColor: theme.palette.primary.dark,
                                            },
                                            borderRadius: '50%',
                                        }}
                                        className={'p-1'}
                                        onClick={nextMonth}
                                    >
                                        <ArrowForward/>
                                    </IconButton>
                                </Col>
                            </Row>
                        </div>
                        <div className="card-body">
                            <table>
                                <thead>
                                <tr>
                                    <th>Pon</th>
                                    <th>Uto</th>
                                    <th>Sri</th>
                                    <th>Čet</th>
                                    <th>Pet</th>
                                    <th>Sub</th>
                                    <th>Ned</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td colSpan="7" style={{height: '20px', backgroundColor: 'white'}}></td>
                                </tr>
                                {getCalendarRows()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
});
export {LobbyCalendar as default};
