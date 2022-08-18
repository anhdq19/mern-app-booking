import React, {useState} from 'react';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./list.css"
import {useLocation} from "react-router-dom";
import DateRange from "react-date-range/dist/components/DateRange";
import {format} from "date-fns";

function List() {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);
    const [openDateRange, setOpenDateRange] = useState(false)

    const handleOpenDateRange = () => {
        setOpenDateRange(!openDateRange)
    }
    console.log(location)
    return (<div>
        <Navbar/>
        <Header type='list'/>
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="listTitle">
                        Search
                    </h1>
                    <div className="lsItem">
                        <label>Destination/property name:</label>
                        <input type="text" placeholder={destination + ""}/>
                    </div>
                    <div className="lsItem lsDate">
                        <label>Check-in to Check-out Date</label>
                        <span
                            onClick={handleOpenDateRange}
                        >
                                    {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                            </span>
                        {openDateRange &&
                            <div onBlur={handleOpenDateRange}>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date'
                                    minDate={new Date()}
                                />
                            </div>
                        }
                    </div>

                    <div className="lsItem">
                        <label>
                            Options
                        </label>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">Min Price (per night)</span>
                            <input type="text"/>
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">Max Price (per night)</span>
                            <input type="text"/>
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">Adult</span>
                            <input
                                type="number"
                                placeholder={String(options.adult)}
                                min={1}
                            />
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">Children</span>
                            <input
                                type="number"
                                placeholder={String(options.children)}
                                min={0}
                            />
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">Room</span>
                            <input
                                type="number"
                                placeholder={String(options.room)}
                                min={1}
                            />
                        </div>

                    </div>
                    <button>Search</button>
                </div>
                <div className="listResult">

                </div>
            </div>
        </div>
    </div>);
}

export default List;