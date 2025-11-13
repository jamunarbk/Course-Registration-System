package com.example.Course.Registration.System.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Course {
    @Id
    private String courseId;
    private String courseName;
    private String trainer;
    private int durationInMonths;

}

