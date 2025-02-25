class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }
  
    addClock(time, callback, id) {
      if (!time || !callback) {
        throw new Error('Отсутствуют обязательные аргументы');
      }
      if (this.alarmCollection.some((alarm) => alarm.id === id)) {
        console.warn('Уже присутствует звонок с таким id');
        return;
      }
      this.alarmCollection.push({id, time, callback, canCall: true});
    }
  
    removeClock(id) {
      const index = this.alarmCollection.findIndex((alarm) => alarm.id === id);
      if (index !== -1) {
        this.alarmCollection.splice(index, 1);
      }
    }
  
    getCurrentFormattedTime() {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  
    start() {
      if (this.intervalId !== null) {
        return;
      }
      const checkAlarm = (alarm) => {
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      };
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach(checkAlarm);
      }, 1000);
    }
  
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  
    resetAllCalls() {
      this.alarmCollection.forEach((alarm) => {
        alarm.canCall = true;
      });
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }