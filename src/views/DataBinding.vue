<template>
    <div>
        <h1>데이터바인딩페이지</h1>
    </div>
    <!-- 라우터 페이지 작업하기
    views 폴더 안에 
    => 파일명.vue 파일 작성
    => 파일명에는 대문자로 시작, 카멜 표기법 사용
    => router폴더 -> import 등록
    => path로 경로 지정하기
    => 사용할 페이지에 router-link 작성
    => to 속성에 url, a태그에도 동일하게 작성할 수 있음 -->
    
    <!-- 1. Data
    2. ifShow
    3. listrender
    4. event
    5. computed watch
    6. components
    => views 폴더에 만들기 
    => app.vue에 메뉴로 연결 -->

    <!-- input 사용자 정의 태그에서 데이터 바인딩
    value v-model -->
    <input type="text" value="내용확인" />
    <input type="text" v-model="valueModel" />
    <!-- 기본형이 문자이므로 v-model.Number 숫자형임을 확인 -->
    <input type="text" v-model.Number="valueNum" />
    <br />

    <select v-model="city">
        <option value="02">서울</option>
        <option value="051">부산</option>
        <option value="064">제주</option>
    </select>
    <br />

    <label>
        <!-- true-value="yes" false-value="no" 으로 기본값을 변경할 수 있음 -->
        <input type="checkbox" v-model="checked" true-value="yes" false-value="no" />
        {{ checked }}
    </label>
    <label>
        <input type="checkbox" v-model="checked1" />
        {{ checked1 }}
    </label>
    <br />

    <label>
        <input type="checkbox" value="서울" v-model="chArr" />
        서울
    </label>
    <label>
        <input type="checkbox" value="부산" v-model="chArr" />
        부산
    </label>
    <label>
        <input type="checkbox" value="제주" v-model="chArr" />
        제주
    </label>
    <span>{{ chArr }}</span>
    <br />

    <label>
        <input type="radio" value="서울" v-model="chArr1" />
        서울
    </label>
    <label>
        <input type="radio" value="부산" v-model="chArr1" />
        부산
    </label>
    <label>
        <input type="radio" value="제주" v-model="chArr1" />
        제주
    </label>
    <span>{{ chArr1 }}</span>
    <br />

    <!-- 버튼 비활성화 -->
    <input type="text" v-model="textValue" />
    <button type="button" :disabled="textValue ===''">클릭</button>

</template>

<script>
export default {

    // setup은 함수형태로 받아오고 data는 데이터 형태로 받아오는것
    // setup을 썼을때는 그래서 state 변수를 기본으로 잡고 reactive 함수를 썼던것이야!!!

    data () {
        

        return {
            valueModel: 'input의 내용',
            valueNum: 10,
            city: '064',
            checked: 'yes',
            checked1: false,
            chArr: [],
            chArr1: [],
            textValue: '',
        }
    }
}
</script>

<style lang="css" scoped>

</style>