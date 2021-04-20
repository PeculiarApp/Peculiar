#NOTE: Install Applications locally if possible
# Install Git

# Install latest node
    #* Install Packages

# Install lastest python

# Install latest Flutter
    #* Get Flutter
    git clone https://github.com/flutter/flutter.git ../flutter -b stable
    $currentDir = Get-Location
    $env:Path += ";$currentDir\..\flutter\bin" 
    
    #* Download Android Studio locally if possible

    #* Install dependancies
    flutter doctor