package edu.csumb.wk02hw01;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    //allow the use of an ArrayList for registered Users
    private ArrayList<user_information> mUsers;

    //Establish variables to store User Input
    private EditText Username;
    private EditText Password;
    private Button Login;

    boolean isValid = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Assign user input
        Username = findViewById(R.id.etUsername);
        Password = findViewById(R.id.etPassword);
        Login = findViewById(R.id.Login_Button);

        //Creating Tests for Users and Passwords
        mUsers = new ArrayList<>();
        mUsers.add(new user_information("Test", "Test"));
        mUsers.add(new user_information("din_djarin", "baby_yoda_ftw"));
        mUsers.add(new user_information("mouse", "keyboard"));
        mUsers.add(new user_information("elijah", "student"));

        Login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String inputName = Username.getText().toString();
                String inputPassword = Password.getText().toString();

                if(inputName.isEmpty() || inputPassword.isEmpty()){ //This checks if their is no input from user.
                    Toast.makeText(MainActivity.this, "Error Check input correctly!", Toast.LENGTH_SHORT).show();
                } else {
                    isValid = validate(inputName, inputPassword); //calls a validate function to check if username and password match.
                    if(!isValid){
                        //Moved the functionality of this statement to validate function.
                    } else {
                        Toast.makeText(MainActivity.this, "Successful Login!", Toast.LENGTH_SHORT).show();

                        //If user logs in successfully they will be routed to a new page.
                        Intent intent = new Intent(MainActivity.this, LandingPage.class);
                        intent.putExtra("USERNAME", inputName);
                        startActivity(intent);
                    }
                }
            }
        });
    }

    //Validate checks the users input and sees if its correct. If password is incorrect an error message will display on screen.
    private boolean validate(String name, String password){
        for(int i = 0; i < mUsers.size(); i++){
            if(name.equals(mUsers.get(i).getUsername()) && password.equals(mUsers.get(i).getPassword())){
                return true;
                } else if (name.equals(mUsers.get(i).getUsername()) && !password.equals(mUsers.get(i).getPassword())){
                Password.setError("Incorrect Password");
                return false;
                } else if (!name.equals(mUsers.get(i).getUsername()) && password.equals(mUsers.get(i).getPassword())){
                Username.setError("Username does not Exist");
                return false;
                }
            }
            return false;
        }
}
