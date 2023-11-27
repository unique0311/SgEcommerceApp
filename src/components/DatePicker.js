import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const DatePickerComponent = ({ opened, onConfirm, onClose }) => {
    const [date, setDate] = useState(new Date());
    return (
        <DatePicker
            modal
            mode="date"
            open={opened}
            date={date}
            onConfirm={date => {
                setDate(date);
                onConfirm(date.toDateString());
            }}
            onCancel={() => {
                onClose(false);
            }}
        />
    )
}

export default DatePickerComponent;