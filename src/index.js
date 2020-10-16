import './styles.css';

const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]')
}

const dateNow = new Date();

class CountdownTimer {
    dateNow
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2020'),
  });
