pipeline {
    agent any
   stages {
        stage('Build') { 
            steps {
                bat ''' @ECHO OFF FOR /f "tokens=*" %%i IN ('docker ps -q') DO docker stop %%i'''
                bat ''' cd WebApp & npm i & npm run build & docker build -t web-app .'''
                bat ''' cd Api & npm i & docker build -t api .'''
            }
        }
        stage('Test') { 
            steps {
                bat '''  ECHO testing  '''
            }
        }
        stage('Delivery'){
            steps{
                
                bat ''' docker-compose up -d '''
            }
        }
    }
}