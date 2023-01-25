<template>
    <div>
        <h1>Component</h1>
        

    <!-- <child-page :title="부모에게서 넘기는 내용"></child-page> -->
    <child-page :title=title />
    
    </div>
</template>

<script>
import ChildPage from '../components/ChildPage.vue'

export default {
    components:{
        ChildPage
    },
    data() {
       
        return { 
            title:"이번에는 동적 데이터",
            num:1000,
            arr:['배열1', '배열2', '배열3'],
            obj:{"이름":"이름", "나이":10},
            boo:true

            // 1. 각 데이터를 자식에게 넘기기
            // 2. arr 배열2만 출력
            // 3. obj 나이 출력 
            // 4. boo의 참 값이 넘어가면 참 값입니다. 라고 텍스트가 보이고 
            // boo의 거짓이 넘어가면 거짓입니다. 라고 텍스트가 보이게 작성
        }   
    }
}
</script>

<style lang="css" scoped>

/* => src/components 폴더 .vue 파일로 작성
        => 대문자로 이름지정, 카멜표현법 사용
        1. 새 컴포넌트 파일 만들기
        2. 사용할 부모 컴포넌트로 import 하기
        3. state영역 components에 등록
        4. 사용
        <등록컴퍼넌트명></등록컴퍼넌트명>
        <등록컴퍼넌트명 />
        5. 페이지 전체, 부분 요소 일수도 있음 */

        /* 1. 부모안에 있는 데이터를 자식에게 넘기는 경우
    props:{
        넘어온 데이터명: {
            type: String, Number, Object, Array, Boolean,
            default: 부모에게서 데이터가 넘어오지 않을때 초기값
        }
    }  */

</style>