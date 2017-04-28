<template>
  <div id="newLorry" class="container">
    <div class="row">
      <div class="col-sm-10 col-md-6 col-lg-6 col-sm-offset-1 col-md-offset-3 col-lg-offset-3">
        <form class="form-horizontal">
          <div class="form-group">
            <label for="inputText1" class="col-sm-3 control-label">车辆编号</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="inputText1" v-model="code" required placeholder="车辆编号">
            </div>
          </div>
          <div class="form-group">
            <label for="inputText2" class="col-sm-3 control-label">起点</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="inputText2" v-model="start" required placeholder="请输入起点">
            </div>
          </div>
          <div class="form-group">
            <label for="inputText3" class="col-sm-3 control-label">终点</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="inputText3" v-model="end" required placeholder="请输入终点">
            </div>
          </div>
          <div class="form-group">
            <label for="inputNumber1" class="col-sm-3 control-label">当前(经度)</label>
            <div class="col-sm-9">
              <input type="number" class="form-control" id="inputNumber1" v-model="current_lng" placeholder="请输入当前地址(经度)">
            </div>
          </div>
          <div class="form-group">
            <label for="inputNumber2" class="col-sm-3 control-label">当前(纬度)</label>
            <div class="col-sm-9">
              <input type="number" class="form-control" id="inputNumber2" v-model="current_lat" placeholder="请输入当前地址(纬度)">
            </div>
          </div>
          <div class="form-group">
            <label for="inputNumber3" class="col-sm-3 control-label">车速</label>
            <div class="col-sm-9">
              <input type="number" class="form-control" id="inputNumber3" v-model="speed" required placeholder="请输入车速">
            </div>
          </div>
          <div class="form-group">
            <label for="inputNumber4" class="col-sm-3 control-label">行驶状态</label>
            <div class="col-sm-9">
              <input type="number" class="form-control" id="inputNumber4" v-model="state" placeholder="请输入行驶状态(0,1,2)">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-3 col-sm-9">
              <!--<a class="btn btn-default" @click="saveData()">保存</a>-->
              <router-link to="/Lorrys"><a class="btn btn-default" @click="saveData()">保存</a></router-link>
              <router-link to="/Lorrys"><a class="btn btn-default">取消</a></router-link>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'newLorry',
    data () {
      return {
        code: '',
        start: '',
        end: '',
        current_lng: '',
        current_lat: '',
        speed: '',
        state: '',

        ref: this.ref()
      }
    },
    mounted: function(){

    },
    methods: {
        saveData: function() {
          this.ref.child(this.code).set({
              "code": this.code,
              "start": this.start,
              "end": this.end,
              "current_lng": this.current_lng,
              "current_lat": this.current_lat,
              "speed": this.speed,
              "state": this.state
          });
        }

    }
  }

</script>
<style>
#newLorry {
  position: relative;
  top: 4px;
}
</style>
