<template>
    <div>
        <el-dialog
            title=""
            :visible.sync="popData_list.isShow"
            width="60%"   :show-close="false" class="ui-dialog"
        >
            <div style="background: #f8f8f8">
                <div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"><span
                    class="ui-dialog-title">{{popData_list.title}}</span>
                    <button
                        class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-dialog-titlebar-close"
                        @click="popData_list.isShow=false"><span
                        class="ui-button-icon-primary ui-icon ui-icon-closethick"></span><span
                        class="ui-button-text">关闭</span></button>
                </div>
                <div class="mgb10 clearfix" style="padding: 10px" v-show="popData_list.isSearch">
                    <div v-for="(item,index) in popData_list.search" class="fl " style="width: 50% ;margin-bottom: 10px">
                       <span style="width: 30%;display: inline-block;text-align: center"> {{item.name}}</span>
                    <el-input placeholder="" style="width: 60%" v-model=item.value
                                @keyup.enter.native="sendVal()"></el-input>
                    </div>
                    <el-button type="primary" class="fr my-btn-submit" @click="sendVal">查询</el-button>
                </div>
                <el-table
                    ref="singleTable" border
                    :data="popData_list.tableData"
                    @current-change="handleCurrentChange"
                    style="width: 100%">
                    <el-table-column label="选择" width="65">
                        <template slot-scope="scope">
                            <el-radio :label="scope.row[popData_list.chooseId]" v-model="templateRadio">&nbsp</el-radio>
                        </template>
                    </el-table-column>
                    <el-table-column v-if="key!='id'" :label="value" v-for="(value, key) in popData_list.header"
                                     :key="value">
                        <template slot-scope="scope">
                            <span>{{scope.row[key]}}</span>
                        </template>
                    </el-table-column>

                </el-table>
                <div style="position: absolute;bottom: 0;width: 100%">
                <div class="block clearfix" style="position: absolute;bottom: 40px;right: 30px;">
                    <el-pagination v-if="popData_list.isShow"
class="fr"
                        @current-change="pageChange"
                        :current-page.sync=popData_list.pageIndex
                        :total=popData_list.totalCount
                        :page-size=popData_list.pageSize
                        layout="prev, pager, next, jumper"
                    >
                    </el-pagination>
                </div>
                <div slot="footer" style="text-align: center; height: 35px;">
                    <el-button class="my-btn-submit" type="primary" @click="(templateRadio!='')?sure():Warning('请先选择条目')">确定</el-button>
                    <el-button class="my-btn-submit" @click="popData_list.isShow = false">关闭</el-button>
                </div>
                </div>
            </div>

        </el-dialog>

    </div>
</template>
<script>
    export default {
        props: {
            popData_list: Object,
        },
        data() {
            return {
                input_val: "",
                templateRadio: "",
                currentPage: 1,
                currentRow: null
            }
        },
        watch: {
            popData_list: {
                handler(newValue, oldValue) {
                    if(newValue.isShow===false){
                        console.log("关闭",newValue.pageIndex, oldValue.pageIndex)
                        this.templateRadio='';
                        this.input_val='';
                        newValue.pageIndex=1
                    }
                },
                deep: true
            }
        },
        mounted() {
        },
        methods: {
            //分页的回掉
            pageChange(val) {
                let _this=this;
                console.log("分页的回掉", val)
                _this.popData_list.pageIndex=val
                //调用父组件的方法,重新请求对应页码数据
                this.$emit("httppaging", val);
            },
            sure(){
                console.log("选中条目", this.currentRow)
                this.popData_list.isShow = false;
                //将选中条目传回
                this.$emit("checkItem", this.currentRow);
            },
            //确定选中
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            //查询
            sendVal(){
                console.log("搜索的回掉", )
                this.templateRadio='';
                console.log(this.popData_list.search)
                //调用父组件的方法,重新请求对应页码数据
                this.$emit("httpSearch", this.popData_list.search);
            },
        }
    }
</script>

