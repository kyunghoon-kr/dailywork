using System.Collections.Generic;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class ChatController : MonoBehaviour
{
    public Text ChatText; // 실제 채팅이 나오는 텍스트
    
    public void Update()
    {
        
    }
    public void PrintAnimation(){
        StartCoroutine(NormalChat("아아아아아아아아아아아아아아아아아아니니니아아아아"));
    }

    
    IEnumerator NormalChat(string narration)
    {
        string writerText = "";

        //텍스트 타이핑 효과
        for (int a = 0; a < narration.Length; a++)
        {   
            if(!PauseMenuBehaviour.isPaused)
            {
                writerText += narration[a];
                ChatText.text = writerText;
                yield return new WaitForSeconds(0.2f);
                // yield return null;
            }
        }

    }
}
