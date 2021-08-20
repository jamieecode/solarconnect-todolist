import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;

const TimeText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;

const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const getUsDay = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  const getUsMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const timeString = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
  const dayString = `${getUsDay[time.getDay()]}day`;
  const dateString = `${getUsMonth[time.getMonth()]}, ${time.getFullYear()}`;
  return (
    <TodoHeadBlock>
      <TimeText>{timeString}</TimeText>

      <DayText>{dayString}</DayText>
      <DateText>{dateString}</DateText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
