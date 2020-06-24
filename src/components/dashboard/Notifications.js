import React from 'react'
import moment from 'moment'

export default function Notifications({ notifications }) {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notification</span>
          <ul className="notifications">
            {notifications && notifications.map(notify =>
              <li key={notify.id}>
                <span className="pink-text">{notify.user} </span>
                <span>{notify.content}</span>
                <div className="grey-text note-date">
                  {moment(notify.date).fromNow()}
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
