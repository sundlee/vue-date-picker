<template>
  <div class="date2">
    <h1>vue-time-date-range-picker</h1>
    <date-picker
      language="en"
      apply-button-label="use"
      :show-helper-buttons="true" 
      :switch-button-initial="true"
      :is-monday-first="true"
      :date-input="{
        inputClass: 'my_class'
      }"
      :calendar-time-input="{
        readonly: true,
        step: 30,
        inputClass: 'my_custom_class',
      }"
    />
  </div>
</template>

<script>
// import DatePicker, { CalendarDialog } from 'vue-time-date-range-picker/dist/vdprDatePicker'
import DatePicker from 'vue-time-date-range-picker/dist/vdprDatePicker'

export default {
  name: 'Date2',
  components: {
    DatePicker,
    // CalendarDialog,
  },
  data() {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 6);
    return {
      opens: 'inline',
      minDate: '2020-08-27T22:00:00.000%2B09:00',
      maxDate: '2020-08-27T22:30:00.000%2B09:00',
      singleDatePicker: false,
      timePicker: true,
      timePicker24Hour: true,
      showWeekNumbers: false,
      showDropdowns: false,
      autoApply: false,
      dateRange: {
        startDate: null,
        endDate: null,
      },
      linkedCalendars: true,

      pickerDates: {
        startDate,
        endDate
      }
    };
  },
   methods: {
    updateValues() {
      console.log('updateValues() - 111');
    },
    checkOpen() {
      console.log('checkOpen() - 111');
    },
    dateFormat() {
      return 'calenar-text';
    },
   },
};
</script>

<style scoped>
.vdpr-datepicker .my_custom_class {
  background-color: aqua !important;
}

.vdpr-datepicker .my_class {
  border: 1px solid red;
  width: 400px;
  height: 80px;
  margin-bottom: 25px;
}
</style>


