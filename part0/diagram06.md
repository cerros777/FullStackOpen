sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 created [{content: "xd", date: "2024-01-14"}, ... ]
    deactivate server

    Note right of browser: content-type application/json in the headers of the POST request indicates the server that the data is JSON format
