<template>
  <div class="date1">
    <h1>vue2-daterange-picker</h1>
        <date-range-picker
            
            :opens="opens"
            :locale-data="{ firstDay: 1, format: 'dd-mm-yyyy HH:mm:ss' }"
            :minDate="minDate" :maxDate="maxDate"
            :singleDatePicker="singleDatePicker"
            :timePicker="timePicker"
            :timePicker24Hour="timePicker24Hour"
            :showWeekNumbers="showWeekNumbers"
            :showDropdowns="showDropdowns"
            :autoApply="autoApply"
            v-model="pickerDates"
            @update="updateValues"
            @toggle="checkOpen"
            :linkedCalendars="linkedCalendars"
            :dateFormat="dateFormat"
    >
      <template
        #input="picker"
        style="min-width: 350px;"
      >
       {{ picker.startDate }} - {{ picker.endDate }}
      </template>
    </date-range-picker>
    <div>
      {{ pickerDates }}
    </div>
  </div>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

export default {
  name: 'Date1',
  components: { DateRangePicker },
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




