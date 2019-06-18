
class grammary{

    var a : Int = 10
    var b : Double = 1.5
    var c : String = "Kotlin"
    var d : String? = null

//    a = 20 // 오류
    var a1 = 10  // var a : Int
    var b1 = 0.1 // var b : Double

    fun function(a: String, b: Int): Unit // 함수 선언
    {
    }

//    void function(String a, int b) Java에서의 함수 선언
//    {
//    }

    var str1 = "안녕하세요" // var str1: String
    var char = '안' // var char: Char
    val longString =
        """
        너무너무너무
        긴 문장을 표현하려고
        할 때는 큰따옴표 3개를
        사용합니다
        """
    val str = "안녕"
//    println(str + "하세요") // 안녕하세요
//
//    println("$str 하세요") // 안녕 하세요 (구분을 위해 str이후 띄어쓰기 한칸이 필요함)
//    println("${str}하세요") // 안녕하세요 (변수와 글자를 붙여야 할 경우)

    var numArray: Array<Int> = arrayOf(1,2,3,4,5)
    var numArray2 = arrayOf(1,2,3,4,5) // 자료형 생략
}
