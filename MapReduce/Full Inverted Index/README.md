# MapReduce Program + Full Inverted Index

## CS570 Big Data Processing Project
### By Feven Araya
### Instructor: Dr. Chang, Henry

---

## Table of Contents
1. [Introduction](#introduction)
2. [Design](#design)
3. [Implementation and Testing](#implementation-and-testing)
4. [Enhancements](#enhancements)
5. [Conclusion](#conclusion)
6. [References](#references)

---

## Introduction
### Objective
Demonstrate the implementation of MapReduce to create a Full Inverted Index.

### Method
Convert a WordCount MapReduce program into a Partial Inverted Index and then into a Full Inverted Index.

---

## Design
### Process Overview
1. **Map Task:** Process each input file to generate key-value pairs.
2. **Combine Task:** Combine intermediate key-value pairs.
3. **Reduce Task:** Aggregate and produce the final output of the Full Inverted Index.

### Example Input Files
- **File 0:** "it is what it is"
- **File 1:** "what is it"
- **File 2:** "it is a banana"

---

## Implementation and Testing
### Steps
1. **Convert WordCount to Partial Inverted Index:**
   - Create `InvertedIndex.java` in the Hadoop-3.3.4 directory.
   - [WordCount MapReduce Example](https://hc.labnet.sfbu.edu/~henry/npu/classes/mapreduce/word_count/slide/wordcount.html#de)
   - [Inverted Index Overview](https://hc.labnet.sfbu.edu/~henry/npu/classes/mapreduce/inverted_index/slide/overview.html)

2. **Compile and Package:**
   - Compile `InvertedIndex.java` with Hadoop libraries.
   - Package compiled classes into `InvertedIndex.jar` using `jar cf InvertedIndex.jar *.class`.

3. **Setup Hadoop Directory:**
   - Create `FullIndex` folder and move `InvertedIndex.jar` to that folder.
   - Create `/tmp/inputfile` directory on HDFS using `hdfs dfs -mkdir /tmp/inputfile`.

4. **Create Input Files:**
   - File 0: "it is what it is"
   - File 1: "what is it"
   - File 2: "it is a banana"

5. **Upload Files to HDFS:**
   - Upload local files to HDFS directory `/tmp/inputfile`.

6. **Run Hadoop Job:**
   - Run Hadoop job using `InvertedIndex.jar` to process data from `/tmp/inputfile` and output results to `/tmp/outputfile`.

7. **Partial Inverted Index Results:**
   - Word "a" appears in document 2.
   - Word "banana" appears in document 2.
   - Word "is" appears in documents 2, 1, and 0.
   - Word "it" appears in documents 0, 2, and 1.
   - Word "what" appears in documents 1 and 0.

8. **Convert Partial to Full Inverted Index:**
   - Create `inverted_index.py` in the current directory.
   - Ensure input files exist.
   - [Inverted Index Overview](https://hc.labnet.sfbu.edu/~henry/npu/classes/mapreduce/inverted_index/slide/overview.html)

9. **Run Python Script:**
   - Execute the script to generate Full Inverted Index.
   - Example Output:
     - `a: [(2, 2)]`
     - `banana: [(2, 3)]`
     - `is: [(0, 1), (0, 4), (1, 1), (2, 1)]`
     - `it: [(0, 0), (0, 3), (1, 2), (2, 0)]`
     - `what: [(0, 2), (1, 0)]`

---

## Enhancements
### Improved Indexing
1. **Optimize Mapper and Reducer:**
   - Improve the efficiency of key-value pair generation.

2. **Enhanced Data Handling:**
   - Manage larger datasets with optimized Hadoop configurations.

### Future Work
- Implement additional functionalities for more complex data indexing.

---

## Conclusion
### Key Takeaways
- MapReduce efficiently processes and indexes large datasets.
- The Full Inverted Index provides detailed word occurrences across documents.

### Learning Outcome
- Gained practical experience with Hadoop MapReduce and data indexing techniques.

---

## GoogleSlide
https://docs.google.com/presentation/d/1VCNrI7RhhfD0s05Imtefp-hjY5YWn9LtrPSfCeymHKo/edit?usp=sharing


**Thank you!**
