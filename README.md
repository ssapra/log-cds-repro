## Reproducing bug with logging the DOM 

Use node 16 and run tests.
```bash
nvm use lts/fermium
npm install
npm test
```

Sometimes Node runs out of memory:
```
FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
 1: 0x10d716a25 node::Abort() (.cold.1) [/Users/shsapra/.nvm/versions/node/v16.14.2/bin/node]
 2: 0x10c40c0f9 node::Abort() [/Users/shsapra/.nvm/versions/node/v16.14.2/bin/node]
 3: 0x10c40c26f node::OnFatalError(char const*, char const*) [/Users/shsapra/.nvm/versions/node/v16.14.2/bin/node]
 4: 0x10c58d7e7 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/Users/shsapra/.nvm/versions/node/v16.14.2/bin/node]
 5: 0x10c58d783 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/Users/shsapra/.nvm/versions/node/v16.14.2/bin/node]
 6: 0x10c72ee65 v8::internal::Heap::FatalProcessOutOfMemory(char const*) [/Users/shsapra/.nvm/versions/node/v16.14.2/bin/node]
...
```

Other times it will fail as expected but prints an exorbitant amount of lines in the DOM:
```
 TestingLibraryElementError: Unable to find an accessible element with the role "textbox" and name "not-the-right-name"

    Here are the accessible roles:

      textbox:

      Name "Name":
      <input
        id="name"
        name="name"
        type="text"
      />

      Name "Another Input":
      <input
        id="second-input"
        name="name"
        type="text"
      />

      --------------------------------------------------

    Ignored nodes: comments, <script />, <style />
    <body
      cds-supports="js no-flex-gap"
      cds-version="5.6.4"
    >
      <div>
        Object {
          "_$AL": Map {
            "status" => undefined,
            "controlWidth" => undefined,
            "validate" => undefined,
            "responsive" => undefined,
            "focused" => undefined,
            "disabled" => undefined,
            "readonly" => undefined,
            "fixedControlWidth" => undefined,
            "supportsPrefixSuffixActions" => undefined,
            "labelLayout" => undefined,
          },
```

