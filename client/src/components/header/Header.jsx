import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBed,
    faBedPulse,
    faCalendarDays,
    faCar,
    faLocationPin,
    faPerson,
    faPlane,
    faTaxi
} from "@fortawesome/free-solid-svg-icons";
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";

import "./header.css"

function Header() {
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1

    });


    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const handleOpenDate = () => {
        setOpenDate(!openDate)
        setOpenOptions(false)
    }
    const handleOpenOption = () => {
        setOpenOptions(!openOptions)
        setOpenDate(false)
    }

    const handleOptionCounter = (label, operator) => {
        setOptions(prevState => {
            return {
                ...prevState,
                [label]: operator === 'up' ? options[label] + 1 : options[label] > 0 ? options[label] - 1 : options[label] = 0
            }
        })
    }
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Stay</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane}/>
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faLocationPin}/>
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>Airport Taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">Find your next stay</h1>
                <p className="headerDesc">Search deals on hotels, homes, and much more...</p>
                <button className="headerBtn">Sign in / Register</button>

                <div className="headerSearch">

                    <div className="headerSearchItem">
                        <FontAwesomeIcon
                            icon={faBedPulse}
                            className="headerIcon"
                        />
                        <input
                            type="text"
                            placeholder="Where are you going?"
                            className="headerSearchInput"
                        />
                    </div>

                    <div
                        className="headerSearchItem"
                    >
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                        <span
                            className="headerSearchText"
                            onClick={handleOpenDate}
                        >
                            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                        </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                        />}
                    </div>

                    <div
                        className="headerSearchItem"

                    >
                        <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                        <span
                            className="headerSearchText"
                            onClick={handleOpenOption}
                        >

                            {`${options.adult} adults ${options.children} children ${options.room} room`}
                        </span>
                        {openOptions && (<div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adults: </span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options['adult'] <= 0}
                                        className="optionCounterButton"
                                        onClick={() => handleOptionCounter("adult", "down")}
                                    > -
                                    </button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOptionCounter("adult", "up")}
                                    > +
                                    </button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children: </span>
                                <div className="optionCounter">
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOptionCounter("children", "down")}
                                        disabled={options['children'] <= 0}
                                    > -
                                    </button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOptionCounter("children", "up")}
                                    >+
                                    </button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room: </span>
                                <div className="optionCounter">
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOptionCounter("room", "down")}
                                        disabled={options['room'] <= 0}
                                    > -

                                    </button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOptionCounter("room", "up")}
                                    > +
                                    </button>
                                </div>
                            </div>
                        </div>)}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;