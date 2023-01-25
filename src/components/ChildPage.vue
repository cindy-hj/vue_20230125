<template>
    <div>
        <h1>자식 컴포넌트</h1>
        {{ title }}<br />
        {{ num }}<br />
        {{ arr[1] }}<br />
        <!-- {{ obj[1] }}<br /> --> 
        

        
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            defalut: '부모가 내용을 넘기지 않았을때'
        },
        num:{
            type: Number,
            default: 0
        },
        arr:{
            type: Array,
            default: ['값 없을때']
        },
        // obj:{
        //     type:Object,
        //     // default:''
        // },
        // boo:{
        //     type:Boolean,
        //     default:true
        // }

            // arr:['배열1', '배열2', '배열3'],
            // obj:{"이름":"이름", "나이":10},
            // boo:true
            // 1. 각 데이터를 자식에게 넘기기
            // 2. arr 배열2만 출력
            // 3. obj 나이 출력 
            // 4. boo의 참 값이 넘어가면 참 값입니다. 라고 텍스트가 보이고 
            // boo의 거짓이 넘어가면 거짓입니다. 라고 텍스트가 보이게 작성
    },

    setup () {
        

        return {}
    }
}
</script>

<style lang="css" scoped>
 /* props: {
            넘어온 파일명: 파일의 형태
        }
        
        1. 정적 데이터 전달
        - 부모 컴퍼넌트에서 부모가 가지고 있는 데이터 넘겨주기
        부모 컴퍼넌트 영역 내용
        <ChildPage :넘겨야할데이터명="넘기는데이터" :넘겨야할데이터명="넘기는데이터" />
        자식 컴퍼넌트 영역 내용
        받을때 받은 데이터를 저장하는 것이 props
        <ChildPage :넘겨야할데이터명="정적은내용을바로작성" :넘겨야할데이터명="넘기는데이터" />

        2. 동적 데이터 전달
        <ChildPage :넘겨야할데이터명="넘기는데이터" :넘겨야할데이터명="넘기는데이터" />
        넘기는 데이터 내용이 부모의 state영역에 포함되어 있음  */
</style>