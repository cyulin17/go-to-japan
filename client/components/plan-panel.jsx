import React from 'react';

export default class PlanPanel extends React.Component {

  render() {

    const { startDate, currentDate, endDate, itinerary, onHandleNext, onHandlePrev } = this.props;

    const startTripDate = new Date(startDate).getTime();
    const currentTripDate = new Date(currentDate).getTime();
    const endTripDate = new Date(endDate).getTime();

    let prevButton = '';
    let nextButton = '';
    if (currentTripDate === endTripDate && currentTripDate === startTripDate) {
      prevButton = 'fas fa-caret-left left-arrow hidden';
      nextButton = 'fas fa-caret-right right-arrow hidden';
    } else if (currentTripDate < endTripDate && currentTripDate === startTripDate) {
      prevButton = 'fas fa-caret-left left-arrow hidden';
      nextButton = 'fas fa-caret-right right-arrow';
    } else if (currentTripDate === endTripDate && currentTripDate > startTripDate) {
      prevButton = 'fas fa-caret-left left-arrow';
      nextButton = 'fas fa-caret-right right-arrow hidden';
    } else {
      prevButton = 'fas fa-caret-left left-arrow';
      nextButton = 'fas fa-caret-right right-arrow';
    }

    const schedules = itinerary.map(schedule =>
      <li key={schedule.destination} className="schedule-box">
        <div className="schedule-container">
          <div className="time-container">
            {schedule.tripStartTime}
            <div className="duration"></div>
            {schedule.tripEndTime}
          </div>
          <div className="photo-container">
            <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=${schedule.photo}&key=${process.env.GOOGLE_TOKEN}`} />
          </div>
          <div className="place-container">
            {schedule.destination}
          </div>
          <div className="trash-container">
            <i onClick={() => this.props.onHandleDelete(schedule.placeId)} className="fas fa-trash-alt"></i>
          </div>
        </div>
      </li>

    );

    return (
    <div className="panel">
      <div className="panel-header">
        <div className="travel-date">
          <div>
          {currentDate}
          </div>
          <div className="arrow-container">
              <span className="previous"><i onClick={onHandlePrev} className={prevButton}></i></span>
              <span className="next"><i onClick={onHandleNext} className={nextButton}></i></span>
          </div>
        </div>
        </div>
        <ul className="ul-padding">
          {schedules}
        </ul>
    </div>
    );
  }
}
