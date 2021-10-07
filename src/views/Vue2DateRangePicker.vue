<template>
  <div>
    <date-range-picker
      v-model="dateRange"
      opens="inline"
      :time-picker="true"
      :auto-apply="true"
      :close-on-esc="false"
      :ranges="false"
      @startSelection="onStartSelection"
      @finishSelection="onFinishSelection"
      @hoverDate="onHoverDate"
      @update="onUpdate"
      @select="onSelect"
    >
      <!--    header slot-->
      <!-- <div slot="header" slot-scope="header" class="slot">
        <h3>Calendar header</h3> <span v-if="header.in_selection"> - in selection</span>
      </div> -->
      <!--    input slot (new slot syntax)-->
      <template #input="picker" style="min-width: 350px;">
        {{ picker.startDate | date }} - {{ picker.endDate | date }}
      </template>
      <!--    date slot-->
      <template #date="data">
        <span class="small">{{ data.date | dateCell }}</span>
      </template>
      <!--    ranges (new slot syntax) -->
      <!-- <template #ranges="ranges">
        <div class="ranges">
          <ul>
            <li v-for="(range, name) in ranges.ranges" :key="name" @click="ranges.clickRange(range)">
              <b>{{ name }}</b> <small class="text-muted">{{ range[0].toDateString() }} -
              {{ range[1].toDateString() }}</small>
            </li>
          </ul>
        </div>
      </template> -->
      <!--    footer slot-->
      <!-- <div slot="footer" slot-scope="data" class="slot">
        <div>
          <b class="text-black">Calendar footer</b> {{ data.rangeText }}
        </div>
        <div style="margin-left: auto">
          <a @click="data.clickApply" v-if="!data.in_selection" class="btn btn-primary btn-sm">Choose current</a>
        </div>
      </div> -->
    </date-range-picker>
    <div>
      {{ dateRange }}
    </div>

    <button
      @click="onClick()"
    >
      click me!
    </button>
  </div>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

export default {
  name: "Vue2DateRangePicker",
  components: { DateRangePicker },
  data () {
    let startDate = new Date();
    let endDate = new Date();
    endDate.setDate(endDate.getDate() + 6)
    return {
      dateRange: { startDate, endDate },
    }
  },
  filters: {
    dateCell (value) {
      let dt = new Date(value)

      return dt.getDate()
    },
    date (val) {
      return val ? val.toLocaleString() : ''
    },
  },
  methods: {
    onStartSelection(data) {
      console.log('onStartSelection() - 111');
      // console.log(data);
      // console.log(typeof data);
    },
    onFinishSelection(data) {
      console.log('onFinishSelection() - 111');
      // console.log(data);
      // console.log(typeof data);
    },
    onHoverDate(data) {
      // console.log('onHoverDate() - 111');
      // console.log(data);
      // console.log(typeof data);
    },
    onUpdate(data) {
      console.log('onUpdate() - 111');
      // console.log(data);
      // console.log(typeof data);
    },
    onSelect(data) {
      console.log('onSelect() - 111');
      // console.log(data);
      // console.log(typeof data);
    },
    onClick() {
      console.log('onClick() - 111');
      let startDate = new Date();
      let endDate = new Date();
      endDate.setDate(endDate.getDate() + 1)
      this.dateRange = { startDate, endDate };
    },
  },
}
</script>

<style scoped>
.slot {
  background-color: #aaa;
  padding: 0.5rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.text-black {
  color: #000;
}
</style>