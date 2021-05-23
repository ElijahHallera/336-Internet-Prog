package edu.csumb.wk02hw01;

import android.content.Context;
import android.content.Intent;

import androidx.test.platform.app.InstrumentationRegistry;
import androidx.test.ext.junit.runners.AndroidJUnit4;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.util.ArrayList;

import static org.junit.Assert.*;

/**
 * Instrumented test, which will execute on an Android device.
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
@RunWith(AndroidJUnit4.class)
public class ExampleInstrumentedTest {

    private ArrayList<user_information> mUsers;

    @Before
    public void setUP(){
        Context appContext = InstrumentationRegistry.getInstrumentation().getTargetContext();
        mUsers = new ArrayList<>();
        mUsers.add(new user_information("Test", "Test"));
        mUsers.add(new user_information("din_djarin", "baby_yoda_ftw"));
        mUsers.add(new user_information("mouse", "keyboard"));
        mUsers.add(new user_information("elijah", "student"));
    }

    @Test
    public void useAppContext() {
        // Context of the app under test.
        Context appContext = InstrumentationRegistry.getInstrumentation().getTargetContext();

        assertEquals("edu.csumb.wk02hw01", appContext.getPackageName());
    }

    //Tests Username validation to a new user.
    @Test
    public void testUsername(){
        mUsers.add(new user_information("username", "password"));
        String compare_value = "";
        for(int i = 0; i < mUsers.size(); i++){
            if(mUsers.get(i).getUsername().equals("username")){
                compare_value = mUsers.get(i).getUsername();
            }
        }
        assertEquals("username", compare_value);
        assertNotEquals("not_username", compare_value);
    }

    //Tests Username validation to an existing user.
    @Test
    public void testUsername2(){
        String compare_value = "";
        for(int i = 0; i < mUsers.size(); i++){
            if(mUsers.get(i).getUsername().equals("Test")){
                compare_value = mUsers.get(i).getUsername();
            }
        }
        assertEquals("Test", compare_value);
        assertNotEquals("not_username", compare_value);
    }

    //Tests Password validation to an existing user.
    @Test
    public void testPassword(){
        mUsers.add(new user_information("username", "password"));
        String compare_value = "";
        for(int i = 0; i < mUsers.size(); i++){
            if(mUsers.get(i).getPassword().equals("password")){
                compare_value = mUsers.get(i).getPassword();
            }
        }
        assertEquals("password", compare_value);
        assertNotEquals("not_password", compare_value);
    }

    //Tests Password validation to an existing user.
    @Test
    public void testPassword2(){
        String compare_value = "";
        for(int i = 0; i < mUsers.size(); i++){
            if(mUsers.get(i).getPassword().equals("baby_yoda_ftw")){
                compare_value = mUsers.get(i).getPassword();
            }
        }
        assertEquals("baby_yoda_ftw", compare_value);
        assertNotEquals("not_password", compare_value);
    }

//    @Test
//    public void testIntent(){
//        Intent intent = new Intent(MainActivity.this, LandingPage.class);
//        intent.putExtra("USERNAME", inputName);
//        startActivity(intent);
//    }

}
