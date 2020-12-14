<template>
<div>

    <Breadcrumb :style="{margin: '10px 0'}">
        <h2>管理员列表</h2>
    </Breadcrumb>
  <Row style="height: 6px ;"> </Row>
    <Content :style="{padding: '24px', minHeight: '680px', background: '#fff'}">


      <Row  >
        <Button type="primary">新增</Button>
        <Input v-model="value" placeholder="请输入员工名称..." style="width: 200px ; margin-left: 10px;"/>
        <Button type="primary" style="margin-left: 10px;">搜索</Button>
      </Row>
       <Row style="height: 26px ;"> </Row>

       <Table :columns="columns1" :data="data1">
         <template slot-scope="{ row, index }" slot="action">
             <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">修改</Button>
             <Button type="error" size="small" @click="remove(index)">删除</Button>
         </template>
       </Table>
          <Row style="height: 20px ;"> </Row>


      <Page :total="data1.length" show-elevator  />
      <Spin fix v-show="isSpinShow">
          <Icon type="load-c" size="30" class="demo-spin-icon-load"></Icon>
          <div>Loading...</div>
      </Spin>
    </Content>
    <Layout :style="{padding: '0 24px 24px',background: '#fff'}">
       <Footer >Footer</Footer>
      </Layout>
     </div>
</template>

<script>
  import http from '../httputils/index.js'
  import store from '../store/index.js'
  import axios from 'axios'
  import router from '../router/index.js'
 export default {
      data () {
            return {
                name: "zhong",
                columns1: [
                  {
                      title: 'ID',
                      key: 'id'
                  },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },

                    {
                        title: 'Address',
                        key: 'address'
                    },
                     {
                        title: 'Action',
                        slot: 'action',
                        //width: 150,
                        align: 'center'
                    }
                ],
                data1: [

                ]
            }
        },
        beforeRouteEnter (to, from, next) {
          console.log(to,from,next)
          var params =  {}
          var promise = http.httpPost(http.apiUrl.getPeopleList,params)
          promise.then(function (result) {
            if (result.code !== '200') {
              next(false)
            } else {
              next(vm => {
                vm.data1 = result.data

              })
            }
          }, function (value) {
            console.log(value)
            store.dispatch('onAddERR', '服务内部错误，请稍后再试')
            next(false)
          })
        }
    }
</script>

<style>
</style>
