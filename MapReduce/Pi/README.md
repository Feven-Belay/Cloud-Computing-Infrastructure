# Calculating Pi using MapReduce on Google Cloud Platform

## CS570 Big Data Processing Project
### By Feven Araya
### Instructor: Dr. Chang, Henry

---

## Table of Contents
1. [Introduction](#introduction)
2. [Design](#design)
3. [Implementation](#implementation)
4. [Testing](#testing)
5. [Enhancements](#enhancements)
6. [Conclusion](#conclusion)
7. [References](#references)

---

## Introduction
This project demonstrates how to use Google Cloud Platform (GCP) to implement Hadoop with MapReduce to calculate the value of Pi. The method involves counting the number of random darts that fall inside and outside a circle.

---

## Design
### Technology Used:
- **Project Environment:** GCP Ubuntu
- **Framework:** Hadoop for MapReduce implementation
- **Programming Language:** Java

### Processes:
1. **Generate Random Points:**
   - Write a Java program to generate random pairs of points (x, y) within a given radius.
   - Save the results in a file for MapReduce input.
   
2. **MapReduce Program:**
   - Write a MapReduce program in Java to count the number of points inside and outside the circle with the given radius.
   - Use the input file generated in the previous step to run the MapReduce program.
   - Output format: Inside xxx, Outside xxx
   
3. **Calculate Pi:**
   - Write a Java program to calculate the value of Pi using the output from the MapReduce program.

---

## Implementation
### Environment Setup:
1. **Start VM Instance:**
   - Initialize a VM instance on GCP.
   
2. **Connection:**
   - Connect to the VM instance using localhost.

### Code Structure:
- **Home Directory:** `PiProject`
- **Java Files:** `GenerateDots.java`, `CalculatePiMR.java`, `CalculatePi.java`
- **Hadoop Directory:** `Hadoop-3.3.4`
- **Input and Output:** Directories for input files and output results.

### Steps:
1. **GenerateDots.java:**
   - Generates random dot pairs with command line arguments for radius and number of pairs.
   
2. **CalculatePiMR.java:**
   - Reads the results of the MapReduce job and calculates Pi based on counts of points inside and outside the circle.
   
3. **CalculatePi.java:**
   - Implements the Hadoop MapReduce program to calculate Pi using the Monte Carlo method.

---

## Testing
### Testing Process:
1. Format the file system.
2. Start NameNode and DataNode daemons.
3. Test connection with localhost.
4. Compile and run `GenerateDots.java` with specified radius and number of points. Save output to `./Input/dots.txt`.
5. Copy the input file to Hadoop and verify.
6. Compile the MapReduce program and create a `.jar` file.
7. Run the MapReduce program with the input file and save the output.
8. Retrieve and save the output locally.
9. Calculate Pi using the local output.

### Result:
- Pi value calculated: **3.112**, which is close to **3.1415926**.

---

## Enhancements
### Improved Results:
1. **Decrease Radius:**
   - Pi value: **3.18**
   
2. **Increase Number of Points:**
   - Pi value: **3.139464**

### Stop VM Instance:
- Stop NameNode and VM instance on GCP after completing the project.

---

## Conclusion
- **Increased Random Sampling:** Enhances the accuracy of the estimated Pi value.
- **Efficiency of MapReduce:** Efficiently processes large datasets with minimal memory usage.


## References
1. [A Hadoop application to calculate Pi](https://subscription.packtpub.com/book/iot-and-hardware/9781783286195/6/ch06lvl1sec34/a-hadoop-application-to-calculate-pi)
2. [Yarn MapReduce approximate-pi example](https://stackoverflow.com/questions/34424307/yarn-mapreduce-approximate-pi-example-fails-exit-code-1-when-run-as-non-hadoop-u)
3. [Introduction to MapReduce](https://www.guru99.com/introduction-to-mapreduce.html)

## GoogleSlide Link:
https://docs.google.com/presentation/d/1utigiJFACHxo-t79qyUCMlq2BMccbb8d74PqGng521E/edit?usp=sharing

