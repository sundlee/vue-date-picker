<template>
  <div class="vue2-date-range-picker">
    <h1>MyDateRangePicker</h1>


    <br><br>
    <div class="picker-wrap">
      <div
        @click="toggle"
        class="toggle-btn"
      >
        Click!
      </div>  
      <div
        v-if="open"
        class="picker-box"
      >
        <b-card
          class="date-picker-wrap"
          no-body
        >
          <!-- <section>
            <ul class="default-date-ranges">
              <li><b>시간 범위</b></li>
              <li>1시간</li>
              <li>3시간</li>
              <li>6시간</li>
              <li>12시간</li>
              <li>1일</li>
              <li>3일</li>
              <li>1주</li>
            </ul>
          </section> -->
          <section class="date-ranges">
            <div class="date-ranges-section">
              <div class="selected-date-ranges-item">
                <b-icon icon="clock"></b-icon>
              </div>
            </div>
            <div class="date-ranges-section">
              <input
                type="text"
                class="date-ranges-item"
                id="startDate"
                v-model="dateRange.startDate"
              >
              <div class="date-ranges-item"> - </div>
              <input
                type="text"
                class="date-ranges-item"
                id="endDate"
                v-model="dateRange.endDate"
              >
            </div>
          </section>
          <section>
            <date-range-picker
              v-model="dateRange"
              opens="inline"
              :time-picker="true"
              :auto-apply="true"
              :close-on-esc="false"
              :ranges="false"
              :locale-data="{
                direction: 'ltr',
                firstDay: 0,
                format: 'yyyy-mm-dd',
                separator: ' - ',
                applyLabel: '확인',
                cancelLabel: '취소',
                weekLabel: '주',
                customRangeLabel: '기간',

                daysOfWeek: ['일', '월', '화', '수', '목', '금', '토'], 
                monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], 
              }" 
              :timePickerIncrement="1"
              @startSelection="onStartSelection"
              @finishSelection="onFinishSelection"
              @hoverDate="onHoverDate"
              @update="onUpdate"
              @select="onSelect"
            >
              <template #input="picker" style="min-width: 350px;">
                {{ picker.startDate | date }} - {{ picker.endDate | date }}
              </template>

            </date-range-picker>
          </section>
          <!-- <section class="time-unit-zone-box">
            <b-form-group
              class="time-unit-zone-item"
              label-cols="5"
              content-cols
              label="시간단위"
              label-for="form-selected-1"
            >
              <b-form-select
                id="form-selected-1"
                
                size="sm"
                v-model="selectedTimeUnit"
                :options="timeUnits"
              />
            </b-form-group>
            <b-form-group
              class="time-unit-zone-item"
              label-cols="5"
              content-cols
              label="타임존"
              label-for="form-selected-2"
            >
              <b-form-select
                id="form-selected-2"
                size="sm"
                v-model="selectedTimeZone"
                :options="timeZones"
              />
            </b-form-group>
          </section> -->
          <section class="button-box">
            <b-button>적용</b-button> 
          </section>
        </b-card>
      </div>  
    </div>
  </div>
</template>

<script>
import DateRangePicker from '@/components/dateRangePicker/DateRangePicker.vue';
import dateUtil from '@/components/dateRangePicker/date_util/native';
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

export default {
  name: "MyDateRangePicker",
  components: { DateRangePicker },
  data() {
    let startDate = new Date();
    startDate.setDate(startDate.getDate() - 3);
    startDate = dateUtil.format(startDate, 'yyyy-mm-dd HH:MM');

    let endDate = new Date();
    endDate = dateUtil.format(endDate, 'yyyy-mm-dd HH:MM');

    return {
      dateRange: { startDate, endDate },
      // selectedDateRangeText: '',
      selectedTimeUnit: '자동',
      selectedTimeZone: '현지 시간',
      timeUnits: ['자동', '1분', '5분','1시간', '1일'],
      timeZones: ['현지 시간', 'UTC 표준'],
      open: false,
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
      // console.log('onStartSelection() - 111');
      // console.log(data);
      // console.log(typeof data);
    },
    onFinishSelection(data) {
      // console.log('onFinishSelection() - 111');
      // console.log(data);
      // console.log(typeof data);
    },
    onHoverDate(data) {
      // console.log('onHoverDate() - 111');
      // console.log(data);
      // console.log(typeof data);
    },
    onUpdate(values) {
      console.log('event: update', {...values})
      this.dateRange.startDate = dateUtil.format(values.startDate, 'yyyy-mm-dd HH:MM');
      this.dateRange.endDate = dateUtil.format(values.endDate, 'yyyy-mm-dd HH:MM');
    },
    onSelect(data) {
      // console.log('onSelect() - 111');
      // console.log(data);
      // console.log(typeof data);
    },
    // onClick() {
    //   console.log('onClick() - 111');
    //   let startDate = new Date();
    //   let endDate = new Date();
    //   endDate.setDate(endDate.getDate() + 1)
    //   this.dateRange = { startDate, endDate };
    // },
    toggle() {
      this.open = !this.open;
    },
  },
}
</script>

<style lang="scss">
.vue2-date-range-picker {
  
  .toggle-btn {
    width: 100px;
    cursor: pointer;
    border: 1px solid lightgray;
    margin: 0 auto;
    background-color: lightgray;
    color: #333;
  }
  .picker-wrap {
    position: relative;
    .picker-box {
      position: absolute;
      color: inherit;
      background-color: #fff;
      // border-radius: 4px;
      // border: 1px solid #ddd;
      // width: 100px;
      max-width: none;
      padding: 0;
      margin-top: 7px;
      top: 30px;
      left: 30%;

      // &:before {
      //   top: -7px;
      //   right: 9px;
      //   border-right: 7px solid transparent;
      //   border-bottom: 7px solid #ccc;
      //   border-left: 7px solid transparent;
      // }
      // &:after {
      //   top: -6px;
      //   right: 10px;
      //   border-right: 6px solid transparent;
      //   border-bottom: 6px solid #fff;
      //   border-left: 6px solid transparent;
      // }
      // &:after, &:before {
      //   position: absolute;
      //   display: inline-block;
      //   // border-bottom-color: rgba(0,0,0,.2);
      //   content: "";
      // }

      .date-picker-wrap {
        display: flex;
        align-content: center;
        justify-content: center;
        width: 584px;
        padding: 20px;
        margin: 20px 0 0;
        margin: auto;
        ul.default-date-ranges {
          display: flex;
          align-content: center;
          justify-content: space-between;
          list-style-type: none;
          padding: 0;
          font-size: 13px;
        }
        .date-ranges {
          display: flex;
          align-content: center;
          justify-content: flex-start;
          background: #fff;
          cursor: pointer;
          padding: 5px 10px;
          border: 1px solid #ccc;
          width: 100%;
          overflow: hidden;
          border-radius: 4px;
          .date-ranges-section {
            display: flex;
            align-content: center;
            justify-content: space-evenly;
            &:nth-child(2) {
              flex: 1 1 300px;
            }
            .date-ranges-item {
              border: none;
              text-align: center;
              font-size: 13px;
              &:focus-visible {
                outline: #ccc solid 1px;
              }
            }
          }
        }
        .time-unit-zone-box {
          display: flex;
          align-content: center;
          justify-content: space-between;
          padding: 20px 0 0;
          margin: 20px 0 0;
          border-top: 1px solid lightgray;
          font-size: 13px;
          .time-unit-zone-item {
            padding: 0;
            margin: 0;
            width: 50%;
          }
        }
        .button-box {
          padding: 20px 0 0;
          .btn {
            width: 80px;
            color: #fff;
            background-color: #004c98;
            border-color: #004c98;
            border-radius: 0
          }
        }
      }
    }
  }





  

}
</style>
