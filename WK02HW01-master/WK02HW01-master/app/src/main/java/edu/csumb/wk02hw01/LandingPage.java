package edu.csumb.wk02hw01;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

public class LandingPage extends AppCompatActivity {


    TextView display_username;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_landing_page);

        display_username=(TextView) findViewById(R.id.display_name);

        //Pulls the name from main activity that was used to sign in and displays the username
        Intent intent = getIntent();
        String username = intent.getStringExtra("USERNAME");
        display_username.setText("Welcome to your Homepage " + username);
    }
}
