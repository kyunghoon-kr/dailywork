using UnityEngine;

public class PauseMenuBehaviour : MainMenuBehaviour
{
    public static bool isPaused;
    public GameObject pauseMenu;
    public KeyCode openKey;
    void Start()
    {
        isPaused = false;
        // pauseMenu 패널 비활성화
        pauseMenu.SetActive(false);
    }

    
    void Update()
    {
        if (Input.GetKeyUp(openKey))
        {
            isPaused = !isPaused;
            pauseMenu.SetActive(isPaused);
            Time.timeScale = (isPaused) ? 0 : 1.0f;
            Time.fixedDeltaTime = 0.02f * Time.timeScale;
        }
    }

    public void ResumeGame()
    {
        isPaused = false;
        pauseMenu.SetActive(false);
        Time.timeScale = 1.0f;
        Time.fixedDeltaTime = 0.02F * Time.timeScale;
    }
}
